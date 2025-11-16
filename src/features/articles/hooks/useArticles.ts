import { useEffect, useState } from 'react';

import { PaginatedMetadata } from '@entities/PaginatedMetadata';
import { Article } from '@features/articles/entities/Article';
import { getArticlesService } from '@features/articles/services/articles';

export const useArticles = (categoryId?: string) => {
  const [articles, setArticles] = useState<PaginatedMetadata<Article>>({
    data: [],
    pagination: {
      currentPage: 0,
      totalPages: 0,
      totalItems: 0,
      itemsPerPage: 0,
      nextPage: false,
      previousPage: false
    }
  });

  const getArticles = async () => {
    const articles = await getArticlesService(categoryId);
    setArticles(articles);
  };

  useEffect(() => {
    getArticles();
  }, [categoryId]);

  return {
    articles
  };
};
