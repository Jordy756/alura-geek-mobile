import { useEffect, useState } from 'react';

import { PaginatedMetadata } from '@entities/PaginatedMetadata';
import { Article } from '@features/articles/entities/Article';
import { getArticlesService } from '@features/articles/services/articles';

export const useArticles = (categoryId?: string) => {
  const [articles, setArticles] = useState<PaginatedMetadata<Article>>({
    data: [],
    pagination: {
      currentPage: 0,
      nextPage: null,
      previousPage: null
    }
  });

  const getArticles = async (page: number) => {
    const articles = await getArticlesService(page, categoryId);
    setArticles(articles);
  };

  useEffect(() => {
    getArticles(1);
  }, [categoryId]);

  return {
    articles
  };
};
