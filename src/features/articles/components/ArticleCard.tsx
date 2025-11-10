import { globalStyles } from '@constants/global-styles.constants';
import { Link } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const ArticleCard = () => {
  return (
    <View style={styles.articleCard}>
      <View style={styles.articleImageContainer}>
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dygwpgeq9/image/upload/v1746146270/article_img_002_i8h7y2.webp'
          }}
          resizeMode="cover"
          style={styles.articleImage}
        />
      </View>
      <View style={styles.articleInfoContainer}>
        <Text style={styles.articleName}>Name</Text>
        <Text style={styles.articlePrice}>$99.99</Text>
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
