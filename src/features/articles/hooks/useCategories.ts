import { useEffect, useState } from 'react';

import { PaginatedMetadata } from '@entities/PaginatedMetadata';
import { Category } from '@features/articles/entities/Category';
import { getCategoriesService } from '@features/articles/services/categories';

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

  const getCategories = async () => {
    const categories = await getCategoriesService();
    setCategories(categories);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return {
    categories
  };
};
