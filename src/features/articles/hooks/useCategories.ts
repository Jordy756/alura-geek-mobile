import { useEffect, useState } from 'react';

import { PaginatedMetadata } from '@entities/PaginatedMetadata';
import { Category } from '@features/articles/entities/Category';
import { getCategoriesService } from '@features/articles/services/categories';

import { getArticlesService } from '../services/articles';

export const useCategories = () => {
  const [categories, setCategories] = useState<PaginatedMetadata<Category>>({
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

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllData = async () => {
    setLoading(true);
    setError(null);
    try {
      const categoriesResponse = await getCategoriesService();
      const categoriesRaw: Category[] = categoriesResponse.data;

      const articlesPromises = categoriesRaw.map(({ _id }) => getArticlesService(_id));
      const articlesResults = await Promise.all(articlesPromises);

      const categoriesWithArticles: PaginatedMetadata<Category> = {
        data: categoriesRaw.map((category, idx) => ({
          ...category,
          articles: articlesResults[idx]
        })),
        pagination: categoriesResponse.pagination
      };

      setCategories(categoriesWithArticles);
    } catch (err: any) {
      setError(err?.message ?? 'Error desconocido');
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return {
    categories,
    pagination: categories,
    loading,
    error
  };
};
