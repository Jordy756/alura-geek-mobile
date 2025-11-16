import { API_BASE_URL } from '@constants/api';

export const getArticlesService = async (page: number, categoryId?: string) => {
  const response = await fetch(`${API_BASE_URL}articles?categoryId=${categoryId}&page=${page}`);
  const articles = await response.json();

  return articles;
};
