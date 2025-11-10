import Button from '@components/Button';
import { globalStyles } from '@constants/global-styles.constants';
import HeroImage from '@images/hero.webp';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const Hero = () => {
  return (
    <ImageBackground source={HeroImage} resizeMode="cover" style={styles.heroImage}>
      <View style={styles.heroContainer}>
        <Text style={[styles.heroText, styles.heroTitle]}>Febrero Promocional</Text>
        <Text style={[styles.heroText, styles.heroSubtitle]}>Productos seleccionados con 33% de descuento</Text>
        <Button variant="primary" text="Ver consolas" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heroImage: {
    flex: 1,
    height: 350
  },
  heroContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: globalStyles.overlay400,
    paddingVertical: 32,
    paddingHorizontal: 16
  },
  heroText: {
    color: globalStyles.neutral50
  },
  heroTitle: {
    fontFamily: globalStyles.fontFamilySemiBold,
    fontSize: globalStyles.textSizeH2
  },
  heroSubtitle: {
    fontFamily: globalStyles.fontFamilyRegular,
    fontSize: globalStyles.textSizeBase,
    marginBottom: 16
  }
});

export default Hero;
