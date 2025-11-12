import { globalStyles } from '@constants/globalStyles';
import { Article } from '@features/articles/entities/Article';
import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const { name, price, image } = article;

  return (
    <View style={styles.articleCard}>
      <View style={styles.articleImageContainer}>
        <Image source={{ uri: image }} resizeMode="cover" style={styles.articleImage} />
      </View>
      <View style={styles.articleInfoContainer}>
        <Text style={styles.articleName}>{name}</Text>
        <Text style={styles.articlePrice}>${price}</Text>
        <Link href={'#'} asChild>
          <Pressable style={styles.viewProductLink}>
            <Text style={styles.viewProductText}>Ver producto</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  articleCard: {
    width: 200,
    flexGrow: 1,
    gap: 4
  },
  articleImageContainer: {
    borderRadius: globalStyles.borderRadiusOut,
    aspectRatio: 4 / 5,
    overflow: 'hidden'
  },
  articleImage: {
    width: '100%',
    height: '100%'
  },
  articleInfoContainer: {
    gap: 2
  },
  articleName: {
    fontFamily: globalStyles.fontFamilyRegular,
    fontSize: globalStyles.textSizeBase,
    color: globalStyles.neutral700
  },
  articlePrice: {
    fontFamily: globalStyles.fontFamilySemiBold,
    fontSize: globalStyles.textSizeH6
  },
  viewProductLink: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  viewProductText: {
    fontFamily: globalStyles.fontFamilySemiBold,
    fontSize: globalStyles.textSizeBase,
    color: globalStyles.primary500
  }
});

export default ArticleCard;
