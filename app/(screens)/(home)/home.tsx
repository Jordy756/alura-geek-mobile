import HomeScreen from '@features/articles/screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, SectionList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeRoute = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <HomeScreen />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default HomeRoute;
