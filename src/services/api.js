/**
 * API Service for UIT Learning AI
 * Handles all API calls to the search endpoint
 */

const API_BASE_URL = 'https://gracephamit-g8-cs106.hf.space';
const SEARCH_ENDPOINT = '/search';

/**
 * Search for learning content using the API
 * @param {string} query - User's search query
 * @param {Object} options - Optional search parameters
 * @returns {Promise<Object>} Search results
 */
export const searchKnowledge = async (query, options = {}) => {
  const {
    top_k = 5,
    semantic_weight = 0.4,
    bm25_weight = 0.4,
    keyword_weight = 0.2,
  } = options;

  try {
    const response = await fetch(`${API_BASE_URL}${SEARCH_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        top_k,
        semantic_weight,
        bm25_weight,
        keyword_weight,
      }),
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('Search API Error:', error);
    return {
      success: false,
      error: error.message || 'Failed to fetch search results',
    };
  }
};

/**
 * Format search results into a readable response
 * @param {Object} apiResponse - Raw API response
 * @returns {Object} Formatted response with text and metadata
 */
export const formatSearchResults = (apiResponse) => {
  if (!apiResponse.success || !apiResponse.data) {
    return {
      text: "I apologize, but I'm having trouble accessing the knowledge base right now. Please try again in a moment.",
      results: [],
      error: true,
    };
  }

  const { query, processed_query, results } = apiResponse.data;

  if (!results || results.length === 0) {
    return {
      text: `I couldn't find any specific information about "${query}". Could you try rephrasing your question or asking about a different topic?`,
      results: [],
      query,
      processed_query,
    };
  }

  // Get the top result as the main answer
  const topResult = results[0];
  
  // Build a comprehensive response
  let responseText = `Based on your question about "${query}", here's what I found:\n\n`;
  responseText += `📚 **${topResult.topic}** (Chapter ${topResult.chapter})\n\n`;
  responseText += `${topResult.raw_text}\n\n`;

  // Add additional context if there are more results
  if (results.length > 1) {
    responseText += `\n**Related Topics:**\n`;
    results.slice(1, 3).forEach((result, index) => {
      responseText += `${index + 1}. ${result.topic} - ${result.knowledge_type}\n`;
    });
  }

  return {
    text: responseText,
    results,
    query,
    processed_query,
    topResult,
  };
};

/**
 * Get search suggestions based on partial query
 * @param {string} partialQuery - Partial user input
 * @returns {Array<string>} Suggested queries
 */
export const getSearchSuggestions = (partialQuery) => {
  // This could be enhanced with a dedicated suggestions endpoint
  const commonTopics = [
    'machine learning',
    'neural networks',
    'deep learning',
    'natural language processing',
    'computer vision',
    'reinforcement learning',
    'supervised learning',
    'unsupervised learning',
  ];

  if (!partialQuery || partialQuery.length < 2) {
    return [];
  }

  return commonTopics.filter(topic =>
    topic.toLowerCase().includes(partialQuery.toLowerCase())
  );
};

export default {
  searchKnowledge,
  formatSearchResults,
  getSearchSuggestions,
};

