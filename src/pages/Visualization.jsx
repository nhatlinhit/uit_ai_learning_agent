import { useState } from 'react';
import GraphView from '../components/GraphView';
import NodeDetailPanel from '../components/NodeDetailPanel';
import graphData, { getGraphStats } from '../data/graphData';

const Visualization = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showPanel, setShowPanel] = useState(false);

  // Get graph statistics
  const stats = getGraphStats();

  const handleNodeClick = (node) => {
    setSelectedNode(node);
    setShowPanel(true);
  };

  const handleClosePanel = () => {
    setShowPanel(false);
    setSelectedNode(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 sm:mb-8 animate-fadeIn">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <span className="text-2xl sm:text-3xl">🕸️</span>
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AI Knowledge Graph
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">
                Explore how AI concepts connect and relate to each other
              </p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 animate-fadeIn">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-5 border border-blue-100 hover:border-blue-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  {stats.totalNodes}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">AI Concepts</p>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-5 border border-green-100 hover:border-green-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                  {stats.totalRelationships}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Relationships</p>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-5 border border-purple-100 hover:border-purple-300 transform hover:-translate-y-1">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                  {stats.totalCategories}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Categories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 h-[calc(100vh-20rem)] sm:h-[calc(100vh-18rem)] animate-fadeIn">
          {/* Graph View - Takes 2 columns on large screens */}
          <div className={`${showPanel ? 'lg:col-span-2' : 'lg:col-span-3'} transition-all duration-500 ease-in-out`}>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 h-full overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <GraphView
                data={graphData}
                onNodeClick={handleNodeClick}
                selectedNodeId={selectedNode?.id}
              />
            </div>
          </div>

          {/* Node Detail Panel - Shows on large screens or when toggled on mobile */}
          <div className={`${showPanel ? 'block' : 'hidden lg:block'} transition-all duration-500 ease-in-out`}>
            <NodeDetailPanel
              node={selectedNode}
              onClose={showPanel ? handleClosePanel : null}
            />
          </div>
        </div>

        {/* Instructions Card */}
        {/* <div className="mt-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 sm:p-8 text-white animate-fadeIn">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
            <span>💡</span>
            <span>How to Use</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-2">🖱️</div>
              <p className="text-sm font-medium">Click nodes to view details</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-2">🔍</div>
              <p className="text-sm font-medium">Scroll to zoom in/out</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-2">✋</div>
              <p className="text-sm font-medium">Drag nodes to reposition</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-sm font-medium">Explore connections</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Visualization;

