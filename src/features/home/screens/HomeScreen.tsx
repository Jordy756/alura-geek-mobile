import { globalStyles } from '@constants/global-styles.constants';
import { StyleSheet, Text, View } from 'react-native';

import Hero from '../components/Hero';

const HomeScreen = () => {
  return (
    <View style={styles.homeScreen}>
      <Hero />
    </View>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    backgroundColor: globalStyles.neutral100
  }
});

export default HomeScreen;
