// Mock data for AI Knowledge Graph
// Nodes represent AI concepts, edges represent relationships

export const aiKnowledgeGraphData = {
  nodes: [
    {
      id: 'ai',
      label: 'Artificial Intelligence',
      category: 'Core',
      description: 'The simulation of human intelligence processes by machines, especially computer systems.',
      color: '#3B82F6',
      size: 30,
      details: {
        definition: 'AI is the broad field of creating intelligent machines that can perform tasks requiring human-like intelligence.',
        applications: ['Automation', 'Decision Making', 'Problem Solving'],
        yearIntroduced: 1956
      }
    },
    {
      id: 'ml',
      label: 'Machine Learning',
      category: 'Subset',
      description: 'A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.',
      color: '#8B5CF6',
      size: 25,
      details: {
        definition: 'ML focuses on developing algorithms that can learn patterns from data.',
        applications: ['Predictive Analytics', 'Recommendation Systems', 'Image Recognition'],
        yearIntroduced: 1959
      }
    },
    {
      id: 'dl',
      label: 'Deep Learning',
      category: 'Subset',
      description: 'A subset of machine learning based on artificial neural networks with multiple layers.',
      color: '#EC4899',
      size: 25,
      details: {
        definition: 'Deep learning uses neural networks with many layers to progressively extract higher-level features.',
        applications: ['Computer Vision', 'Speech Recognition', 'Natural Language Processing'],
        yearIntroduced: 2006
      }
    },
    {
      id: 'nn',
      label: 'Neural Networks',
      category: 'Architecture',
      description: 'Computing systems inspired by biological neural networks in animal brains.',
      color: '#10B981',
      size: 20,
      details: {
        definition: 'Neural networks consist of interconnected nodes (neurons) that process information.',
        applications: ['Pattern Recognition', 'Classification', 'Regression'],
        yearIntroduced: 1943
      }
    },
    {
      id: 'nlp',
      label: 'Natural Language Processing',
      category: 'Application',
      description: 'The ability of computers to understand, interpret, and generate human language.',
      color: '#F59E0B',
      size: 22,
      details: {
        definition: 'NLP combines linguistics and machine learning to process human language.',
        applications: ['Chatbots', 'Translation', 'Sentiment Analysis'],
        yearIntroduced: 1950
      }
    },
    {
      id: 'cv',
      label: 'Computer Vision',
      category: 'Application',
      description: 'Enabling computers to derive meaningful information from digital images and videos.',
      color: '#EF4444',
      size: 22,
      details: {
        definition: 'Computer vision trains computers to interpret and understand the visual world.',
        applications: ['Facial Recognition', 'Object Detection', 'Autonomous Vehicles'],
        yearIntroduced: 1960
      }
    },
    {
      id: 'rl',
      label: 'Reinforcement Learning',
      category: 'Technique',
      description: 'Learning through interaction with an environment to maximize cumulative reward.',
      color: '#06B6D4',
      size: 20,
      details: {
        definition: 'RL agents learn by trial and error, receiving rewards or penalties for actions.',
        applications: ['Game Playing', 'Robotics', 'Resource Management'],
        yearIntroduced: 1980
      }
    },
    {
      id: 'supervised',
      label: 'Supervised Learning',
      category: 'Technique',
      description: 'Learning from labeled training data to make predictions on new data.',
      color: '#84CC16',
      size: 18,
      details: {
        definition: 'Supervised learning uses labeled examples to learn the mapping from inputs to outputs.',
        applications: ['Classification', 'Regression', 'Forecasting'],
        yearIntroduced: 1950
      }
    },
    {
      id: 'unsupervised',
      label: 'Unsupervised Learning',
      category: 'Technique',
      description: 'Finding hidden patterns in data without labeled responses.',
      color: '#A855F7',
      size: 18,
      details: {
        definition: 'Unsupervised learning discovers structure in unlabeled data.',
        applications: ['Clustering', 'Dimensionality Reduction', 'Anomaly Detection'],
        yearIntroduced: 1960
      }
    },
    {
      id: 'cnn',
      label: 'Convolutional Neural Networks',
      category: 'Architecture',
      description: 'Neural networks designed for processing grid-like data such as images.',
      color: '#F97316',
      size: 18,
      details: {
        definition: 'CNNs use convolutional layers to automatically learn spatial hierarchies of features.',
        applications: ['Image Classification', 'Object Detection', 'Medical Imaging'],
        yearIntroduced: 1989
      }
    },
    {
      id: 'rnn',
      label: 'Recurrent Neural Networks',
      category: 'Architecture',
      description: 'Neural networks designed for sequential data with feedback connections.',
      color: '#14B8A6',
      size: 18,
      details: {
        definition: 'RNNs process sequences by maintaining internal state (memory).',
        applications: ['Time Series Prediction', 'Speech Recognition', 'Text Generation'],
        yearIntroduced: 1986
      }
    },
    {
      id: 'transformer',
      label: 'Transformers',
      category: 'Architecture',
      description: 'Architecture based on self-attention mechanisms for processing sequential data.',
      color: '#6366F1',
      size: 20,
      details: {
        definition: 'Transformers use attention mechanisms to process all positions simultaneously.',
        applications: ['Language Models', 'Machine Translation', 'Text Summarization'],
        yearIntroduced: 2017
      }
    }
  ],
  edges: [
    { source: 'ai', target: 'ml', relationship: 'includes', strength: 1 },
    { source: 'ml', target: 'dl', relationship: 'includes', strength: 1 },
    { source: 'ml', target: 'supervised', relationship: 'uses', strength: 0.8 },
    { source: 'ml', target: 'unsupervised', relationship: 'uses', strength: 0.8 },
    { source: 'ml', target: 'rl', relationship: 'uses', strength: 0.8 },
    { source: 'dl', target: 'nn', relationship: 'based-on', strength: 1 },
    { source: 'nn', target: 'cnn', relationship: 'type-of', strength: 0.9 },
    { source: 'nn', target: 'rnn', relationship: 'type-of', strength: 0.9 },
    { source: 'ai', target: 'nlp', relationship: 'enables', strength: 0.9 },
    { source: 'ai', target: 'cv', relationship: 'enables', strength: 0.9 },
    { source: 'dl', target: 'nlp', relationship: 'powers', strength: 0.9 },
    { source: 'dl', target: 'cv', relationship: 'powers', strength: 0.9 },
    { source: 'cnn', target: 'cv', relationship: 'used-in', strength: 1 },
    { source: 'rnn', target: 'nlp', relationship: 'used-in', strength: 0.8 },
    { source: 'transformer', target: 'nlp', relationship: 'used-in', strength: 1 },
    { source: 'transformer', target: 'rnn', relationship: 'improves-upon', strength: 0.7 }
  ]
};

