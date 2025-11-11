import { useEffect, useState } from 'react';

import { PaginatedMetadata } from '@entities/paginated-metada.entity';
import { Article } from '@features/articles/entities/article.entity';
import { getArticlesService } from '@features/articles/services/articles.service';

export const useArticles = (categoryId?: string) => {
  const [articles, setArticles] = useState<PaginatedMetadata<Article>>({
    data: [],
    pagination: {
      currentPage: 0,
      totalPages: 0,
      totalItems: 0,
      itemsPerPage: 0,
      hasNextPage: false,
      hasPreviousPage: false
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
