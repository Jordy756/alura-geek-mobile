import { useState } from 'react';

import { globalStyles } from '@constants/global-styles.constants';
import { useController, useFormContext } from 'react-hook-form';
import { StyleSheet, Text, TextInput, type TextInputProps, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

interface InputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  name: string;
  label: string;
}

const Input = ({ label, name, ...rest }: InputProps) => {
  const { control } = useFormContext();
  const [isFocused, setIsFocused] = useState(false);

  const {
    field: { onChange, onBlur, value },
    fieldState: { error }
  } = useController({
    name,
    control
  });

  const shouldFloat = isFocused || value;
  const animatedValue = useSharedValue(shouldFloat ? 1 : 0);

  animatedValue.value = withTiming(shouldFloat ? 1 : 0, { duration: 200 });

  const labelStyle = useAnimatedStyle(() => ({
    top: animatedValue.value * -13.5 + 12.5,
    fontSize: animatedValue.value * -3.2 + 16
  }));

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    setIsFocused(false);
    onBlur();
  };

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
    pointerEvents: 'none'
  },
  input: {
    paddingTop: 25,
    paddingHorizontal: 10,
    paddingBottom: 5,
    fontSize: globalStyles.textSizeBase,
    backgroundColor: globalStyles.neutral50,
    borderBottomWidth: 1,
    borderBottomColor: globalStyles.neutral400,
    borderRadius: globalStyles.borderRadiusOut
  },
  inputError: {
    borderBottomColor: globalStyles.error500
  },
  errorText: {
    color: globalStyles.error500,
    fontSize: 12,
    fontWeight: globalStyles.textWeight,
    marginHorizontal: 4
  }
});

export default Input;
