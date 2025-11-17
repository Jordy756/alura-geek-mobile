import Footer from '@components/Footer';
import { globalStyles } from '@constants/globalStyles';
import ArticleList from '@features/articles/components/ArticleList';
import ArticleSectionHeader from '@features/articles/components/ArticleSectionHeader';
import Hero from '@features/articles/components/Hero';
import { useCategories } from '@features/articles/hooks/useCategories';
import { SectionList, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const { categories, loading, error, loadMoreCategories, loadMoreArticles } = useCategories();

  const sections = categories.data.map((category) => ({
    categoryId: category._id,
    title: category.name,
    articles: category.articles?.data || [],
    data: [{}]
  }));

  return (
    <SectionList
      sections={sections}
      stickySectionHeadersEnabled={false}
      keyExtractor={(_, index) => index.toString()}
      renderSectionHeader={({ section }) => (
        <ArticleSectionHeader categoryId={section.categoryId} categoryName={section.title} />
      )}
      renderItem={({ section }) => <ArticleList articles={section.articles} loadMoreArticles={loadMoreArticles} />}
      ListHeaderComponent={<Hero />}
      ListFooterComponent={<Footer />}
      style={styles.articleSection}
      initialNumToRender={3}
      onEndReached={loadMoreCategories}
      onEndReachedThreshold={1}
    />
  );
};

const styles = StyleSheet.create({
  articleSection: {
    backgroundColor: globalStyles.neutral100
  }
});

export default HomeScreen;
