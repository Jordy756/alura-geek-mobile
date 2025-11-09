import Footer from '@components/Footer';
import Header from '@components/Header';
import LoginScreen from '@features/auth/screens/LoginScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginRoute() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <LoginScreen />
      <Footer />
    </SafeAreaView>
  );
}
