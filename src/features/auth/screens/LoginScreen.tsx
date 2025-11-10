import { globalStyles } from '@constants/global-styles.constants';
import LoginForm from '@features/auth/components/LoginForm';
import { StyleSheet, Text, View } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.loginScreen}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    paddingVertical: 128,
    paddingHorizontal: 16,
    backgroundColor: globalStyles.neutral100,
    justifyContent: 'center',
    gap: 16
  },
  title: {
    textAlign: 'center',
    fontFamily: globalStyles.fontFamilySemiBold,
    fontSize: globalStyles.textSizeH3,
    color: globalStyles.neutral900
  }
});

export default LoginScreen;
