import ArticleCard from '@features/articles/components/ArticleCard';
import { Article } from '@features/articles/entities/Article';
import { FlatList, StyleSheet } from 'react-native';

interface ArticleListProps {
  articles: Article[] | undefined;
  loadMoreArticles: (categoryId: string) => void;
}

const ArticleList = ({ articles, loadMoreArticles }: ArticleListProps) => {
  // if (!articles || articles.length === 0) return null;
  console.log(articles);

  const getHola = () => {
    console.log('Hola');
  };

  return (
    <FlatList
      horizontal
      data={articles}
      renderItem={({ item }) => <ArticleCard article={item} />}
      keyExtractor={(item, index) => item._id + index}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.articlesContainer}
      nestedScrollEnabled={false}
      // initialNumToRender={4}
      // maxToRenderPerBatch={4}
      // windowSize={3}
      // onEndReached={() => loadMoreArticles('680b209fc0d13ce41d4f9ce4')}
      // onEndReachedThreshold={0.8}
      // ListFooterComponent={<Footer />}
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
