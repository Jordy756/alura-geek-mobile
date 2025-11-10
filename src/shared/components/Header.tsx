import AluraGeekLogo from '@components/AluraGeekLogo';
import Button from '@components/Button';
import { globalStyles } from '@constants/global-styles.constants';
import SearchIcon from '@icons/SearchIcon';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <AluraGeekLogo />
      <View style={styles.headerActions}>
        <Link asChild href="/login">
          <Button variant="secondary" text="Login" />
        </Link>
        <Pressable onPress={() => console.log('Hola')}>
          <SearchIcon />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    backgroundColor: globalStyles.neutral50,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.neutral200
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  }
});

export default Header;
