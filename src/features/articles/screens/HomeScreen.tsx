import { globalStyles } from '@constants/global-styles.constants';
import ArticlesSection from '@features/articles/components/ArticlesSection';
import Hero from '@features/articles/components/Hero';
import { useCategories } from '@features/articles/hooks/use-categories.hook';
import { StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  const { categories } = useCategories();
  return (
    <View style={styles.homeScreen}>
      <Hero />
      {categories.map(({ _id: id, name }) => (
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
