import { useState } from 'react';

import AluraGeekLogo from '@components/AluraGeekLogo';
import Button from '@components/Button';
import Input from '@components/Input';
import { globalStyles } from '@constants/global-styles.constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '@schemas/contact.scheme';
import { Link } from 'expo-router';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
  const [links, setLinks] = useState([
    {
      label: 'Quienes somos',
      link: 'https://jordy1756.github.io/alura-geek/'
    },
    {
      label: 'Política de privacidad',
      link: 'https://jordy1756.github.io/alura-geek/'
    },
    {
      label: 'Programa de fidelidad',
      link: 'https://jordy1756.github.io/alura-geek/'
    },
    {
      label: 'Nuestras Tiendas',
      link: 'https://jordy1756.github.io/alura-geek/'
    },
    {
      label: 'Quiero ser franquiciado',
      link: 'https://jordy1756.github.io/alura-geek/'
    },
    {
      label: 'Anúncie aquí',
      link: 'https://jordy1756.github.io/alura-geek/'
    }
  ]);

  const methods = useForm({
    resolver: yupResolver(contactSchema),
    mode: 'onBlur'
  });

  return (
    <View style={styles.footer}>
      <View style={styles.navigation}>
        <AluraGeekLogo />
        <View style={styles.linkListContainer}>
          {links.map((item, index) => (
            <Link key={index} href={item.link} asChild>
              <Text style={styles.linkText}>{item.label}</Text>
            </Link>
          ))}
        </View>
      </View>
      <FormProvider {...methods}>
        <View style={styles.contactForm}>
          <Input label="Nombre" name="name" />
          <Input label="Mensaje" name="message" multiline numberOfLines={7} style={{ minHeight: 120 }} />
          <Button variant="primary" text="Enviar mensaje" />
        </View>
      </FormProvider>
      <View style={styles.copyrightContainer}>
        <Text style={styles.copyrightText}>© Yordi Castro Rojas</Text>
        <Text style={styles.copyrightText}>2025</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: globalStyles.secondary500
  },
  navigation: {
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 16,
    gap: 16
  },
  linkListContainer: {
    alignItems: 'center',
    gap: 16
  },
  linkText: {
    fontFamily: globalStyles.fontFamilyLight,
    fontSize: globalStyles.textSizeBase,
    color: globalStyles.neutral900
  },
  contactForm: {
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 48
  },
  copyrightContainer: {
    backgroundColor: globalStyles.neutral50,
    paddingVertical: 32,
    paddingHorizontal: 16
  },
  copyrightText: {
    textAlign: 'center',
    fontFamily: globalStyles.fontFamilyLight,
    fontSize: globalStyles.textSizeBase,
    color: globalStyles.neutral900
  }
});

export default Footer;
