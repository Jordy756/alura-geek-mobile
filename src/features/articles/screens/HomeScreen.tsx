import { globalStyles } from '@constants/global-styles.constants';
import ArticlesSection from '@features/articles/components/ArticlesSection';
import Hero from '@features/articles/components/Hero';
import { StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Hero />
      <ArticlesSection />
      <ArticlesSection />
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: globalStyles.neutral100
  },
});

export default HomeScreen;
