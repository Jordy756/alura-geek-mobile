import { StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Auth Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LoginScreen;
