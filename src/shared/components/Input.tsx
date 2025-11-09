import { globalStyles } from '@constants/global-styles.constants';
import { useInput } from '@hooks/use-input.hook';
import { StyleSheet, Text, TextInput, type TextInputProps, View } from 'react-native';
import Animated from 'react-native-reanimated';

interface InputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  name: string;
  label: string;
}

const Input = ({ label, name, ...rest }: InputProps) => {
  const { value, error, labelStyle, onChange, handleBlur, handleFocus } = useInput(name);

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={[styles.input, error && styles.inputError]}
        onChangeText={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        {...rest}
      />
      <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
      {error && <Text style={styles.errorText}>{error.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    position: 'relative',
    gap: 4
  },
  label: {
    position: 'absolute',
    top: 12.5,
    left: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: globalStyles.neutral600,
    backgroundColor: globalStyles.neutral50,
    pointerEvents: 'none',
    fontFamily: globalStyles.fontFamilyLight
  },
  input: {
    paddingTop: 25,
    paddingHorizontal: 10,
    paddingBottom: 5,
    fontSize: globalStyles.textSizeBase,
    color: globalStyles.neutral900,
    backgroundColor: globalStyles.neutral50,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.neutral400,
    borderRadius: globalStyles.borderRadiusOut,
    fontFamily: globalStyles.fontFamilyRegular
  },
  inputError: {
    borderBottomColor: globalStyles.error500
  },
  errorText: {
    color: globalStyles.error500,
    fontSize: 12,
    fontFamily: globalStyles.fontFamilyLight,
    marginHorizontal: 4
  }
});

export default Input;
