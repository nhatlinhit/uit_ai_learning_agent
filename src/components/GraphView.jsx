import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const GraphView = ({ data, onNodeClick, selectedNodeId }) => {
  const svgRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const simulationRef = useRef(null);

  useEffect(() => {
    if (!data || !svgRef.current) return;

    // Support both 'edges' and 'relationships' property names for flexibility
    const edges = data.relationships || data.edges || [];
    const nodes = data.nodes || [];

    if (nodes.length === 0) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll('*').remove();

    // Set up dimensions
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    // Create SVG
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    // Create a group for zoom
    const g = svg.append('g');

    // Set up zoom behavior
    const zoom = d3.zoom()
      .scaleExtent([0.5, 3])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Create force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(edges)
        .id(d => d.id)
        .distance(d => 100 / (d.strength || 1))
      )
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(d => d.size + 10));

    simulationRef.current = simulation;

    // Create links
    const link = g.append('g')
      .selectAll('line')
      .data(edges)
      .join('line')
      .attr('stroke', '#94a3b8')
      .attr('stroke-width', d => d.strength * 2)
      .attr('stroke-opacity', 0.6);

    // Create link labels - support both 'relationship' and 'type' properties
    const linkLabel = g.append('g')
      .selectAll('text')
      .data(edges)
      .join('text')
      .attr('font-size', 10)
      .attr('fill', '#64748b')
      .attr('text-anchor', 'middle')
      .text(d => d.type || d.relationship || '');

    // Create nodes
    const node = g.append('g')
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', d => d.size || 20)
      .attr('fill', d => d.color || '#3B82F6')
      .attr('stroke', d => selectedNodeId === d.id ? '#1e293b' : '#fff')
      .attr('stroke-width', d => selectedNodeId === d.id ? 4 : 2)
      .attr('cursor', 'pointer')
      .call(drag(simulation));

    // Create node labels - support both 'label' and 'name' properties
    const nodeLabel = g.append('g')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .attr('font-size', 12)
      .attr('font-weight', 'bold')
      .attr('fill', '#1e293b')
      .attr('text-anchor', 'middle')
      .attr('dy', d => (d.size || 20) + 15)
      .attr('pointer-events', 'none')
      .text(d => d.name || d.label || 'Unknown');

    // Add hover effects
    node
      .on('mouseenter', function(event, d) {
        setHoveredNode(d);
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', d.size * 1.3)
          .attr('stroke-width', 3);
      })
      .on('mouseleave', function(event, d) {
        setHoveredNode(null);
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', d.size)
          .attr('stroke-width', selectedNodeId === d.id ? 4 : 2);
      })
      .on('click', function(event, d) {
        event.stopPropagation();
        onNodeClick(d);
      });

    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      linkLabel
        .attr('x', d => (d.source.x + d.target.x) / 2)
        .attr('y', d => (d.source.y + d.target.y) / 2);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      nodeLabel
        .attr('x', d => d.x)
        .attr('y', d => d.y);
    });

    // Drag behavior
    function drag(simulation) {
      function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }

    // Cleanup
    return () => {
      simulation.stop();
    };
  }, [data, selectedNodeId, onNodeClick]);

  return (
    <div className="relative w-full h-full">
      <svg ref={svgRef} className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg" />

      {/* Hover tooltip */}
      {hoveredNode && (
        <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-gray-200 z-10 animate-fadeIn">
          <h3 className="font-bold text-gray-800 mb-1">{hoveredNode.name || hoveredNode.label}</h3>
          <p className="text-sm text-gray-600 mb-2">{hoveredNode.description}</p>
          {hoveredNode.category && (
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
              {hoveredNode.category}
            </span>
          )}
        </div>
      )}

      {/* Legend */}
      {/* <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 border border-gray-200">
        <h4 className="font-semibold text-gray-800 text-sm mb-2">Controls</h4>
        <ul className="text-xs text-gray-600 space-y-1">
          <li>🖱️ Drag nodes to reposition</li>
          <li>🔍 Scroll to zoom in/out</li>
          <li>👆 Click node for details</li>
          <li>✋ Hover for quick info</li>
        </ul>
      </div> */}
    </div>
  );
};

export default GraphView;

