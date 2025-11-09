import { useEffect } from 'react';

import { Raleway_300Light, Raleway_400Regular, Raleway_600SemiBold, useFonts } from '@expo-google-fonts/raleway';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_600SemiBold
  });

  useEffect(() => {
    (fontsLoaded || fontError) && SplashScreen.hideAsync();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) return null;

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false
        }}
      />
    </>
  );
};

export default RootLayout;
