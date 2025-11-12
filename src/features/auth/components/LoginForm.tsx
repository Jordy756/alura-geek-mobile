import Button from '@components/Button';
import Input from '@components/Input';
import { loginSchema } from '@features/auth/schemas/login';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

const LoginForm = () => {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur'
  });

  const onSubmit = (data: any) => {
    console.log('Datos del formulario:', data);
  };

  return (
    <FormProvider {...methods}>
      <View style={styles.loginForm}>
        <Input name="email" label="Correo" keyboardType="email-address" />
        <Input name="password" label="Contraseña" secureTextEntry />
        <Button variant="primary" text="Login" onPress={methods.handleSubmit(onSubmit)} />
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    gap: 16
  }
});

export default LoginForm;
