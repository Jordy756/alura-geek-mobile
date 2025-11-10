import Footer from '@components/Footer';
import Header from '@components/Header';
import LoginScreen from '@features/auth/screens/LoginScreen';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginRoute = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <LoginScreen />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginRoute;
