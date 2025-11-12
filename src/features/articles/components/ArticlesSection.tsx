import ArrowRightIcon from '@components/icons/ArrowRightIcon';
import { globalStyles } from '@constants/globalStyles';
import ArticleCard from '@features/articles/components/ArticleCard';
import { useArticles } from '@features/articles/hooks/useArticles';
import { Link } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

interface ArticlesSectionProps {
  categoryId: string;
  categoryName: string;
}

const ArticlesSection = ({ categoryId, categoryName }: ArticlesSectionProps) => {
  const { articles } = useArticles(categoryId);
  return (
    <View style={styles.articleSection}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{categoryName}</Text>
        <Link href={'#'} asChild>
          <Pressable style={styles.viewAllLink}>
            <Text style={styles.viewAllText}>Ver todo</Text>
            <ArrowRightIcon color={globalStyles.primary500} />
          </Pressable>
        </Link>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.articlesContainer}>
        {articles.data.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  articleSection: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 16
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16
  },
  sectionTitle: {
    fontFamily: globalStyles.fontFamilySemiBold,
    fontSize: globalStyles.textSizeH5,
    color: globalStyles.neutral700
  },
  viewAllLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  viewAllText: {
    fontFamily: globalStyles.fontFamilySemiBold,
    fontSize: globalStyles.textSizeBase,
    color: globalStyles.primary500,
    lineHeight: 20
  },
  articlesContainer: {
    gap: 16
  }
});

export default ArticlesSection;
