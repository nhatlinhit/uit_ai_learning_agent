# Graph Data Documentation

## Overview

This directory contains mock data for the AI Knowledge Graph visualization. The data is structured to represent AI concepts as nodes and their relationships as edges.

## File Structure

### `graphData.js`

The main data file containing:
- **nodes**: Array of AI concept objects
- **relationships**: Array of connection objects between nodes
- **Helper functions**: Utility functions for data manipulation

## Data Structure

### Node Object

Each node represents an AI concept with the following properties:

```javascript
{
  id: string,              // Unique identifier (e.g., 'ai-001')
  name: string,            // Concept name (e.g., 'Artificial Intelligence')
  description: string,     // Detailed description of the concept
  category: string,        // Category classification (e.g., 'Core Concept')
  color: string,           // Hex color code for visualization (e.g., '#3B82F6')
  size: number,            // Node size in the graph (e.g., 30)
  metadata: {              // Additional information
    yearIntroduced: number,      // Year the concept was introduced
    complexity: string,          // Complexity level ('Low', 'Medium', 'High', 'Very High')
    applications: string[],      // Array of practical applications
    relatedFields: string[]      // Array of related academic/industry fields
  }
}
```

### Relationship Object

Each relationship represents a connection between two nodes:

```javascript
{
  id: string,              // Unique identifier (e.g., 'rel-001')
  source: string,          // ID of the source node
  target: string,          // ID of the target node
  type: string,            // Type of relationship (e.g., 'includes', 'uses', 'based-on')
  description: string,     // Description of the relationship
  strength: number         // Connection strength (0.0 to 1.0)
}
```

## Relationship Types

The graph uses various relationship types to describe connections:

- **includes**: One concept includes another as a subset
- **uses**: One concept uses another as a technique or tool
- **based-on**: One concept is based on another
- **enables**: One concept enables another's functionality
- **powers**: One concept powers or drives another
- **used-in**: One concept is used in another's applications
- **improves-upon**: One concept improves upon another
- **specializes-to**: One concept specializes to another for specific use cases
- **implements**: One concept can be implemented using another

## Helper Functions

### `getNodeById(nodeId)`

Retrieves a node by its ID.

```javascript
import { getNodeById } from './graphData';

const node = getNodeById('ai-001');
console.log(node.name); // 'Artificial Intelligence'
```

### `getNodeRelationships(nodeId)`

Gets all relationships where the node is either source or target.

```javascript
import { getNodeRelationships } from './graphData';

const relationships = getNodeRelationships('ml-002');
console.log(relationships.length); // Number of connections
```

### `getConnectedNodes(nodeId)`

Returns an array of all nodes connected to the specified node.

```javascript
import { getConnectedNodes } from './graphData';

const connected = getConnectedNodes('dl-003');
console.log(connected.map(n => n.name)); // Names of connected concepts
```

### `getGraphStats()`

Returns statistics about the entire graph.

```javascript
import { getGraphStats } from './graphData';

const stats = getGraphStats();
console.log(stats);
// {
//   totalNodes: 12,
//   totalRelationships: 20,
//   totalCategories: 5,
//   categories: ['Core Concept', 'AI Subset', ...],
//   avgConnectionsPerNode: 3.33
// }
```

## Usage in Components

### GraphView Component

The `GraphView` component consumes the data dynamically:

```javascript
import graphData from '../data/graphData';
import GraphView from '../components/GraphView';

<GraphView 
  data={graphData}
  onNodeClick={handleNodeClick}
  selectedNodeId={selectedNode?.id}
/>
```

The component supports both property naming conventions:
- `nodes` (required)
- `relationships` or `edges` (flexible)
- Node properties: `name` or `label`, `metadata` or `details`

### NodeDetailPanel Component

The `NodeDetailPanel` displays detailed information about selected nodes:

```javascript
import NodeDetailPanel from '../components/NodeDetailPanel';

<NodeDetailPanel 
  node={selectedNode}
  onClose={handleClosePanel}
/>
```

## Adding New Data

To add new concepts to the graph:

1. **Add a new node** to the `nodes` array with a unique ID
2. **Add relationships** to connect it with existing nodes
3. **Ensure consistency** in property naming and structure
4. **Update categories** if introducing a new category type

Example:

```javascript
// Add to nodes array
{
  id: 'gpt-013',
  name: 'GPT Models',
  description: 'Generative Pre-trained Transformer models...',
  category: 'Neural Architecture',
  color: '#8B5CF6',
  size: 22,
  metadata: {
    yearIntroduced: 2018,
    complexity: 'Very High',
    applications: ['Text Generation', 'Chatbots', 'Code Completion'],
    relatedFields: ['NLP', 'Deep Learning', 'Transformers']
  }
}

// Add to relationships array
{
  id: 'rel-021',
  source: 'tf-012',
  target: 'gpt-013',
  type: 'enables',
  description: 'Transformers enable GPT models',
  strength: 1.0
}
```

## Data Validation

The data structure is designed to be flexible but should maintain:
- Unique IDs for all nodes and relationships
- Valid source/target references in relationships
- Strength values between 0.0 and 1.0
- Consistent color codes (hex format)
- Positive size values for nodes

