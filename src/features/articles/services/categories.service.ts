import { API_BASE_URL } from '@constants/api.constants';

export const getCategoriesService = async () => {
  const response = await fetch(`${API_BASE_URL}categories`);
  console.log('Categories response:', response);
  const categories = await response.json();

  return categories;
};
