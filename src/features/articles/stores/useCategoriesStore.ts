import { PaginatedMetadata } from '@entities/PaginatedMetadata';
import { Article } from '@features/articles/entities/Article';
import { Category } from '@features/articles/entities/Category';
import { create } from 'zustand';

interface CategoryStore {
  categories: PaginatedMetadata<Category>;
  setCategories: (categories: PaginatedMetadata<Category>) => void;
  appendCategories: (newCategories: Category[], newPagination: PaginatedMetadata<Category>['pagination']) => void;
  appendProductsInCategory: (
    categoryId: string,
    newProducts: PaginatedMetadata<Article>,
    newPagination: PaginatedMetadata<Article>['pagination']
  ) => void;
}

export const useCategoriesStore = create<CategoryStore>((set, get) => ({
  categories: {
    data: [],
    pagination: {
      currentPage: 0,
      nextPage: null,
      previousPage: null
    }
  },
  setCategories: (categories) => set({ categories }),
  appendCategories: (newCategories, newPagination) =>
    set((state) => ({
      categories: {
        data: [...state.categories.data, ...newCategories],
        pagination: newPagination
      }
    })),
  appendProductsInCategory: (categoryId, newProducts, newPagination) =>
    set((state) => ({
      categories: {
        data: state.categories.data.map((category) =>
          category._id === categoryId
            ? {
                ...category,
                articles: {
                  data: [...(category.articles?.data || []), ...newProducts.data],
                  pagination: newPagination
                }
              }
            : category
        ),
        pagination: state.categories.pagination
      }
    }))
}));
