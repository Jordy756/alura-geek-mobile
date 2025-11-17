import { create } from "zustand";
import { Article } from "@features/articles/entities/Article";

interface ArticleStore {
  articlesByCategory: Record<string, Article[]>;
}

export const useArticlesStore = create<ArticleStore>((set, get) => ({
    articlesByCategory: {},
}));