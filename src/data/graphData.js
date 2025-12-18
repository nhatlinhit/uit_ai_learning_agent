/**
 * Mock Graph Data for AI Knowledge Visualization
 * 
 * Structure:
 * - nodes: Array of AI concepts with unique IDs, names, and descriptions
 * - relationships: Array of connections between nodes
 */

export const graphData = {
  nodes: [
    {
      id: 'ai-001',
      name: 'Artificial Intelligence',
      description: 'The simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction.',
      category: 'Core Concept',
      color: '#3B82F6',
      size: 30,
      metadata: {
        yearIntroduced: 1956,
        complexity: 'High',
        applications: ['Automation', 'Decision Making', 'Problem Solving', 'Pattern Recognition'],
        relatedFields: ['Computer Science', 'Cognitive Science', 'Mathematics']
      }
    },
    {
      id: 'ml-002',
      name: 'Machine Learning',
      description: 'A subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.',
      category: 'AI Subset',
      color: '#8B5CF6',
      size: 26,
      metadata: {
        yearIntroduced: 1959,
        complexity: 'High',
        applications: ['Predictive Analytics', 'Recommendation Systems', 'Fraud Detection', 'Image Recognition'],
        relatedFields: ['Statistics', 'Data Science', 'Computer Science']
      }
    },
    {
      id: 'dl-003',
      name: 'Deep Learning',
      description: 'A subset of machine learning based on artificial neural networks with representation learning. Uses multiple layers to progressively extract higher-level features from raw input.',
      category: 'ML Technique',
      color: '#EC4899',
      size: 26,
      metadata: {
        yearIntroduced: 2006,
        complexity: 'Very High',
        applications: ['Computer Vision', 'Speech Recognition', 'Natural Language Processing', 'Autonomous Vehicles'],
        relatedFields: ['Neural Networks', 'Mathematics', 'GPU Computing']
      }
    },
    {
      id: 'nn-004',
      name: 'Neural Networks',
      description: 'Computing systems vaguely inspired by biological neural networks that constitute animal brains. Consists of interconnected nodes (neurons) organized in layers.',
      category: 'Architecture',
      color: '#10B981',
      size: 22,
      metadata: {
        yearIntroduced: 1943,
        complexity: 'High',
        applications: ['Pattern Recognition', 'Classification', 'Regression', 'Function Approximation'],
        relatedFields: ['Neuroscience', 'Mathematics', 'Computer Science']
      }
    },
    {
      id: 'nlp-005',
      name: 'Natural Language Processing',
      description: 'The ability of a computer program to understand human language as it is spoken and written. Combines computational linguistics with statistical and machine learning models.',
      category: 'AI Application',
      color: '#F59E0B',
      size: 24,
      metadata: {
        yearIntroduced: 1950,
        complexity: 'High',
        applications: ['Chatbots', 'Machine Translation', 'Sentiment Analysis', 'Text Summarization'],
        relatedFields: ['Linguistics', 'Computer Science', 'Cognitive Science']
      }
    },
    {
      id: 'cv-006',
      name: 'Computer Vision',
      description: 'An interdisciplinary field that deals with how computers can gain high-level understanding from digital images or videos. Seeks to automate tasks that the human visual system can do.',
      category: 'AI Application',
      color: '#EF4444',
      size: 24,
      metadata: {
        yearIntroduced: 1960,
        complexity: 'High',
        applications: ['Facial Recognition', 'Object Detection', 'Medical Imaging', 'Autonomous Vehicles'],
        relatedFields: ['Image Processing', 'Pattern Recognition', 'Computer Graphics']
      }
    },
    {
      id: 'rl-007',
      name: 'Reinforcement Learning',
      description: 'An area of machine learning concerned with how intelligent agents ought to take actions in an environment to maximize cumulative reward. Learns through trial and error.',
      category: 'ML Technique',
      color: '#06B6D4',
      size: 22,
      metadata: {
        yearIntroduced: 1980,
        complexity: 'Very High',
        applications: ['Game Playing', 'Robotics', 'Resource Management', 'Traffic Control'],
        relatedFields: ['Control Theory', 'Operations Research', 'Game Theory']
      }
    },
    {
      id: 'sl-008',
      name: 'Supervised Learning',
      description: 'Machine learning task of learning a function that maps an input to an output based on example input-output pairs. Uses labeled training data.',
      category: 'ML Technique',
      color: '#84CC16',
      size: 20,
      metadata: {
        yearIntroduced: 1950,
        complexity: 'Medium',
        applications: ['Classification', 'Regression', 'Forecasting', 'Risk Assessment'],
        relatedFields: ['Statistics', 'Data Mining', 'Pattern Recognition']
      }
    },
    {
      id: 'ul-009',
      name: 'Unsupervised Learning',
      description: 'Type of machine learning that looks for previously undetected patterns in a dataset with no pre-existing labels. Discovers hidden structure in unlabeled data.',
      category: 'ML Technique',
      color: '#A855F7',
      size: 20,
      metadata: {
        yearIntroduced: 1960,
        complexity: 'Medium',
        applications: ['Clustering', 'Dimensionality Reduction', 'Anomaly Detection', 'Association Rules'],
        relatedFields: ['Statistics', 'Data Mining', 'Information Theory']
      }
    },
    {
      id: 'cnn-010',
      name: 'Convolutional Neural Networks',
      description: 'Deep learning algorithm that can take in an input image, assign importance to various aspects/objects in the image, and differentiate one from another. Uses convolutional layers.',
      category: 'Neural Architecture',
      color: '#F97316',
      size: 20,
      metadata: {
        yearIntroduced: 1989,
        complexity: 'High',
        applications: ['Image Classification', 'Object Detection', 'Medical Imaging', 'Video Analysis'],
        relatedFields: ['Computer Vision', 'Signal Processing', 'Deep Learning']
      }
    },
    {
      id: 'rnn-011',
      name: 'Recurrent Neural Networks',
      description: 'Class of neural networks where connections between nodes form a directed graph along a temporal sequence. Uses internal state (memory) to process sequences of inputs.',
      category: 'Neural Architecture',
      color: '#14B8A6',
      size: 20,
      metadata: {
        yearIntroduced: 1986,
        complexity: 'High',
        applications: ['Time Series Prediction', 'Speech Recognition', 'Text Generation', 'Music Composition'],
        relatedFields: ['Sequence Modeling', 'Natural Language Processing', 'Signal Processing']
      }
    },
    {
      id: 'tf-012',
      name: 'Transformers',
      description: 'Deep learning model that adopts the mechanism of self-attention, differentially weighting the significance of each part of the input data. Revolutionized NLP.',
      category: 'Neural Architecture',
      color: '#6366F1',
      size: 22,
      metadata: {
        yearIntroduced: 2017,
        complexity: 'Very High',
        applications: ['Language Models', 'Machine Translation', 'Text Summarization', 'Question Answering'],
        relatedFields: ['Natural Language Processing', 'Attention Mechanisms', 'Deep Learning']
      }
    }
  ],

  /**
   * Relationships define connections between nodes
   * Each relationship has:
   * - source: ID of the source node
   * - target: ID of the target node
   * - type: Type of relationship
   * - description: What this relationship means
   * - strength: Connection strength (0-1)
   */
  relationships: [
    {
      id: 'rel-001',
      source: 'ai-001',
      target: 'ml-002',
      type: 'includes',
      description: 'AI includes Machine Learning as a major subset',
      strength: 1.0
    },
    {
      id: 'rel-002',
      source: 'ml-002',
      target: 'dl-003',
      type: 'includes',
      description: 'Machine Learning includes Deep Learning as an advanced technique',
      strength: 1.0
    },
    {
      id: 'rel-003',
      source: 'ml-002',
      target: 'sl-008',
      type: 'uses',
      description: 'Machine Learning uses Supervised Learning as a primary approach',
      strength: 0.9
    },
    {
      id: 'rel-004',
      source: 'ml-002',
      target: 'ul-009',
      type: 'uses',
      description: 'Machine Learning uses Unsupervised Learning for pattern discovery',
      strength: 0.9
    },
    {
      id: 'rel-005',
      source: 'ml-002',
      target: 'rl-007',
      type: 'uses',
      description: 'Machine Learning uses Reinforcement Learning for decision-making tasks',
      strength: 0.85
    },
    {
      id: 'rel-006',
      source: 'dl-003',
      target: 'nn-004',
      type: 'based-on',
      description: 'Deep Learning is based on Neural Networks with multiple layers',
      strength: 1.0
    },
    {
      id: 'rel-007',
      source: 'nn-004',
      target: 'cnn-010',
      type: 'specializes-to',
      description: 'Neural Networks specialize to CNNs for spatial data',
      strength: 0.95
    },
    {
      id: 'rel-008',
      source: 'nn-004',
      target: 'rnn-011',
      type: 'specializes-to',
      description: 'Neural Networks specialize to RNNs for sequential data',
      strength: 0.95
    },
    {
      id: 'rel-009',
      source: 'ai-001',
      target: 'nlp-005',
      type: 'enables',
      description: 'AI enables Natural Language Processing capabilities',
      strength: 0.9
    },
    {
      id: 'rel-010',
      source: 'ai-001',
      target: 'cv-006',
      type: 'enables',
      description: 'AI enables Computer Vision capabilities',
      strength: 0.9
    },
    {
      id: 'rel-011',
      source: 'dl-003',
      target: 'nlp-005',
      type: 'powers',
      description: 'Deep Learning powers modern NLP systems',
      strength: 0.95
    },
    {
      id: 'rel-012',
      source: 'dl-003',
      target: 'cv-006',
      type: 'powers',
      description: 'Deep Learning powers modern Computer Vision systems',
      strength: 0.95
    },
    {
      id: 'rel-013',
      source: 'cnn-010',
      target: 'cv-006',
      type: 'used-in',
      description: 'CNNs are extensively used in Computer Vision tasks',
      strength: 1.0
    },
    {
      id: 'rel-014',
      source: 'rnn-011',
      target: 'nlp-005',
      type: 'used-in',
      description: 'RNNs are used in Natural Language Processing for sequential text',
      strength: 0.85
    },
    {
      id: 'rel-015',
      source: 'tf-012',
      target: 'nlp-005',
      type: 'used-in',
      description: 'Transformers are the state-of-the-art architecture for NLP',
      strength: 1.0
    },
    {
      id: 'rel-016',
      source: 'tf-012',
      target: 'rnn-011',
      type: 'improves-upon',
      description: 'Transformers improve upon RNNs with attention mechanisms',
      strength: 0.8
    },
    {
      id: 'rel-017',
      source: 'tf-012',
      target: 'nn-004',
      type: 'based-on',
      description: 'Transformers are based on neural network architectures',
      strength: 0.9
    },
    {
      id: 'rel-018',
      source: 'sl-008',
      target: 'nn-004',
      type: 'implements',
      description: 'Supervised Learning can be implemented using Neural Networks',
      strength: 0.8
    },
    {
      id: 'rel-019',
      source: 'ul-009',
      target: 'nn-004',
      type: 'implements',
      description: 'Unsupervised Learning can be implemented using Neural Networks',
      strength: 0.75
    },
    {
      id: 'rel-020',
      source: 'rl-007',
      target: 'nn-004',
      type: 'implements',
      description: 'Reinforcement Learning often uses Neural Networks for function approximation',
      strength: 0.85
    }
  ]
};

/**
 * Helper function to get a node by ID
 * @param {string} nodeId - The ID of the node to retrieve
 * @returns {object|null} The node object or null if not found
 */
export const getNodeById = (nodeId) => {
  return graphData.nodes.find(node => node.id === nodeId) || null;
};

/**
 * Helper function to get all relationships for a specific node
 * @param {string} nodeId - The ID of the node
 * @returns {array} Array of relationships where the node is source or target
 */
export const getNodeRelationships = (nodeId) => {
  return graphData.relationships.filter(
    rel => rel.source === nodeId || rel.target === nodeId
  );
};

/**
 * Helper function to get connected nodes
 * @param {string} nodeId - The ID of the node
 * @returns {array} Array of connected node IDs
 */
export const getConnectedNodes = (nodeId) => {
  const relationships = getNodeRelationships(nodeId);
  const connectedIds = new Set();

  relationships.forEach(rel => {
    if (rel.source === nodeId) {
      connectedIds.add(rel.target);
    } else {
      connectedIds.add(rel.source);
    }
  });

  return Array.from(connectedIds).map(id => getNodeById(id)).filter(Boolean);
};

/**
 * Helper function to get graph statistics
 * @returns {object} Statistics about the graph
 */
export const getGraphStats = () => {
  const categories = new Set(graphData.nodes.map(node => node.category));

  return {
    totalNodes: graphData.nodes.length,
    totalRelationships: graphData.relationships.length,
    totalCategories: categories.size,
    categories: Array.from(categories),
    avgConnectionsPerNode: (graphData.relationships.length * 2) / graphData.nodes.length
  };
};

export default graphData;

