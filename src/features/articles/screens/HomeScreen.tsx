import { globalStyles } from '@constants/globalStyles';
import ArticlesSection from '@features/articles/components/ArticlesSection';
import Hero from '@features/articles/components/Hero';
import { useCategories } from '@features/articles/hooks/useCategories';
import { StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  const { categories } = useCategories();
  return (
    <View style={styles.homeScreen}>
      <Hero />
      {categories.data.map(({ _id: id, name }) => (
        <ArticlesSection key={id} categoryId={id} categoryName={name} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: globalStyles.neutral100
  }
});

export default HomeScreen;
