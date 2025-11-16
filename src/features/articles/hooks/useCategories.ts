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
      nextPage: null,
      previousPage: null
    }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllData = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      // 1. Obtiene esta página de categorías
      const categoriesResponse = await getCategoriesService(page);
      const categoriesRaw: Category[] = categoriesResponse.data;
      // 2. Artículos en paralelo
      const articlesPromises = categoriesRaw.map(({ _id }) => getArticlesService(_id));
      const articlesResults = await Promise.all(articlesPromises);
      // 3. Combina datos
      const categoriesWithArticles: Category[] = categoriesRaw.map((category, idx) => ({
        ...category,
        articles: articlesResults[idx]
      }));
      // 4. Junta a las anteriores (append)
      setCategories((prev) => ({
        data: [...prev.data, ...categoriesWithArticles],
        pagination: categoriesResponse.pagination
      }));
    } catch (err: any) {
      setError(err?.message ?? 'Error desconocido');
    }
    setLoading(false);
  };

  useEffect(() => {
    getAllData(1);
  }, []);

  const loadMoreCategories = () => {
    if (loading || !categories.pagination.nextPage) return;

    getAllData(categories.pagination.nextPage);
  };

  return {
    categories,
    loading,
    error,
    loadMoreCategories
  };
};
