import ArticleCard from '@features/articles/components/ArticleCard';
import { Article } from '@features/articles/entities/Article';
import { FlatList, StyleSheet } from 'react-native';

interface ArticleListProps {
  articles: Article[] | undefined;
  loadMoreArticles: () => void;
}

const ArticleList = ({ articles, loadMoreArticles }: ArticleListProps) => {
  return (
    <FlatList
      horizontal
      data={articles}
      renderItem={({ item }) => <ArticleCard article={item} />}
      keyExtractor={(item, index) => item._id + index}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.articlesContainer}
      nestedScrollEnabled={false}
      onEndReached={loadMoreArticles}
      onEndReachedThreshold={1}
    />
  );
};

const styles = StyleSheet.create({
  articlesContainer: {
    gap: 16,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
    height: 'auto'
  }
});

export default ArticleList;
