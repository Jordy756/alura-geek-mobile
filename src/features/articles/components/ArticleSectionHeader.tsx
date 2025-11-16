import ArrowRightIcon from '@components/icons/ArrowRightIcon';
import { globalStyles } from '@constants/globalStyles';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ArticleSectionHeaderProps {
  categoryId: string;
  categoryName: string;
}

const ArticleSectionHeader = ({ categoryName }: ArticleSectionHeaderProps) => {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{categoryName}</Text>
      <Link href={'#'} asChild>
        <Pressable style={styles.viewAllLink}>
          <Text style={styles.viewAllText}>Ver todo</Text>
          <ArrowRightIcon color={globalStyles.primary500} />
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    paddingTop: 24,
    paddingHorizontal: 16,
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
  }
});

export default ArticleSectionHeader;
