import ArticleCard from '@features/articles/components/ArticleCard';
import { Article } from '@features/articles/entities/Article';
import { FlatList, StyleSheet } from 'react-native';

interface ArticleListProps {
  articles: Article[] | undefined;
}

const ArticleList = ({ articles }: ArticleListProps) => {
  if (!articles || articles.length === 0) return null;

  return (
    <FlatList
      horizontal
      scrollEnabled={true}
      data={articles}
      renderItem={({ item }) => <ArticleCard article={item} />}
      keyExtractor={(item) => item._id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.articlesContainer}
      nestedScrollEnabled={false}
      initialNumToRender={4}
      maxToRenderPerBatch={4}
      windowSize={3}
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
