import { globalStyles } from '@constants/global-styles';
import { Pressable, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
  text: string;
  onPress?: () => void;
}

const variantStyles: Record<string, { button: ViewStyle; text: TextStyle }> = {
  primary: {
    button: {
      paddingVertical: 16,
      paddingHorizontal: 32,
      backgroundColor: globalStyles.primary500
    },
    text: {
      color: globalStyles.neutral50
    }
  },
  secondary: {
    button: {
      paddingVertical: 15,
      paddingHorizontal: 31,
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: globalStyles.primary500
    },
    text: {
      color: globalStyles.primary500
    }
  },
  tertiary: {
    button: {
      paddingVertical: 16,
      paddingHorizontal: 32,
      backgroundColor: 'transparent'
    },
    text: {
      color: globalStyles.neutral900,
      fontWeight: '500'
    }
  }
};

const Button = ({ variant, text, onPress }: ButtonProps) => {
  const { button: buttonVariantStyles, text: textVariantStyles } = variantStyles[variant];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, buttonVariantStyles, pressed && styles.buttonPressed]}
    >
      <Text style={[styles.buttonText, textVariantStyles]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: globalStyles.borderRadiusOut
  },
  buttonPressed: {
    opacity: 0.75
  },
  buttonText: {
    fontSize: globalStyles.textSizeBase,
    fontWeight: '400',
    textAlign: 'center'
  }
});

export default Button;
