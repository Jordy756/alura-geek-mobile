import { API_BASE_URL } from '@constants/api';

export const getCategoriesService = async (page: number) => {
  const response = await fetch(`${API_BASE_URL}categories?page=${page}`);
  const categories = await response.json();

  return categories;
};
