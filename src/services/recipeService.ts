import axios from 'axios';

const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchCategories = async () => {
  const response = await axios.get(`${API_BASE_URL}/categories.php`);
  return response.data.categories;
};

export const fetchRecipesByCategory = async (category: string) => {
  const response = await axios.get(`${API_BASE_URL}/filter.php?c=${category}`);
  return response.data.meals;
};

export const fetchRecipeDetails = async (id: string) => {
  const response = await axios.get(`${API_BASE_URL}/lookup.php?i=${id}`);
  return response.data.meals[0];
};
