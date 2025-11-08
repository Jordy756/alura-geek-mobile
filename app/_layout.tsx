import Header from '@components/Header';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Header />
    </>
  );
};

export default RootLayout;
