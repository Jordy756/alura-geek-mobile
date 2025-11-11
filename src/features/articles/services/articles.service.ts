import { API_BASE_URL } from '@constants/api.constants';

export const getArticlesService = async (categoryId?: string) => {
  const response = await fetch(`${API_BASE_URL}articles?categoryId=${categoryId}`);
  const articles = await response.json();

  return articles;
};
