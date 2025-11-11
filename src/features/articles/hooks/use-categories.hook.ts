import { useEffect, useState } from 'react';

import { Category } from '@features/articles/entities/category.entity';
import { getCategoriesService } from '@features/articles/services/categories.service';

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

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
