import { API_BASE_URL } from '@constants/api';

export const getCategoriesService = async () => {
  const response = await fetch(`${API_BASE_URL}categories`);
  const categories = await response.json();

  return categories;
};
