import Button from '@components/Button';
import Input from '@components/Input';
import { globalStyles } from '@constants/global-styles';
import { StyleSheet, View } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Input label="email" keyBoardType="email-address" />
      <Input label="password" />
      <Button variant="primary" text="Login" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: globalStyles.neutral100,
    justifyContent: 'flex-end',
    gap: 16
  }
});

export default LoginScreen;
