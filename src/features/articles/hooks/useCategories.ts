import { useEffect, useState } from 'react';

import { Category } from '@features/articles/entities/Category';
import { getArticlesService } from '@features/articles/services/articles';
import { getCategoriesService } from '@features/articles/services/categories';
import { useCategoriesStore } from '@features/articles/stores/useCategoriesStore';

export const useCategories = () => {
  const categories = useCategoriesStore((state) => state.categories);
  const appendCategories = useCategoriesStore((state) => state.appendCategories);
  const appendProductsInCategory = useCategoriesStore((state) => state.appendProductsInCategory);

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
      const articlesPromises = categoriesRaw.map(({ _id }) => getArticlesService(1, _id));
      const articlesResults = await Promise.all(articlesPromises);
      // 3. Combina datos
      const categoriesWithArticles: Category[] = categoriesRaw.map((category, idx) => ({
        ...category,
        articles: articlesResults[idx]
      }));

      appendCategories(categoriesWithArticles, categoriesResponse.pagination);
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

  const loadMoreArticles = (categoryId: string) => {
    const category = categories.data.find((cat) => cat._id === categoryId);

    console.log({ category, nextPage: category?.articles?.pagination.nextPage });

    if (!category || !category.articles?.pagination.nextPage) return;

    const nextPage = category.articles.pagination.nextPage;

    const getMoreArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const articlesResponse = await getArticlesService(nextPage, categoryId);
        appendProductsInCategory(categoryId, articlesResponse, articlesResponse.pagination);
      } catch (err: any) {
        setError(err?.message ?? 'Error desconocido');
      }
      setLoading(false);
    };

    getMoreArticles();
  };

  return {
    categories,
    loading,
    error,
    loadMoreCategories,
    loadMoreArticles
  };
};
