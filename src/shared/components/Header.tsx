import AluraGeekLogo from '@components/AluraGeekLogo';
import Button from '@components/Button';
import { globalStyles } from '@constants/global-styles';
import SearchIcon from '@icons/SearchIcon';
import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <Stack
      screenOptions={{
        header: () => (
          <SafeAreaView style={styles.header} edges={['top']}>
            <View style={styles.headerContent}>
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
          </SafeAreaView>
        )
      }}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: globalStyles.neutral50,
    padding: 16,
    elevation: 0
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  }
});

export default Header;
