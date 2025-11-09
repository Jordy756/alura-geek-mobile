import { useState } from 'react';

import AluraGeekLogo from '@components/AluraGeekLogo';
import { globalStyles } from '@constants/global-styles.constants';
import { Link } from 'expo-router';
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

  return (
    <View style={styles.footer}>
      <View style={styles.div1}>
        <AluraGeekLogo />
        <View style={styles.linkListContainer}>
          {links.map((item, index) => (
            <Link key={index} href={item.link} asChild>
              <Text style={styles.linkText}>{item.label}</Text>
            </Link>
          ))}
        </View>
      </View>
      <View style={styles.div2}>
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
  div1: {
    alignItems: 'center',
    paddingVertical: 48,
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
  div2: {
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
