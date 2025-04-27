// lib/fetchNews.ts
import axios from 'axios';

const API_KEY = 'b02b4b33c69143f2992e81f5c72833f2'; // Your News API key
const BASE_URL = 'https://newsapi.org/v2/everything';

export const fetchNews = async (query: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query, // Replace 'Christianity' with your keyword
        apiKey: API_KEY,
      },
    });

    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
