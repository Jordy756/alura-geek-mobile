import Footer from '@components/Footer';
import Header from '@components/Header';
import HomeScreen from '@features/articles/screens/HomeScreen';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeRoute = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <HomeScreen />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeRoute;
