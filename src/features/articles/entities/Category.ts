import { PaginatedMetadata } from '@entities/PaginatedMetadata';
import { Article } from '@features/articles/entities/Article';

export interface Category {
  _id: string;
  name: string;
  articles?: PaginatedMetadata<Article>;
}
