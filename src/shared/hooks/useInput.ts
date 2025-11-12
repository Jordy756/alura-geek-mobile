import { useController, useFormContext } from 'react-hook-form';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export const useInput = (name: string) => {
  const { control } = useFormContext();
  const animatedValue = useSharedValue(0);

  const {
    field: { onChange, onBlur, value },
    fieldState: { error }
  } = useController({
    name,
    control
  });

  const labelStyle = useAnimatedStyle(() => ({
    top: animatedValue.value * -13.5 + 12.5,
    fontSize: animatedValue.value * -3.2 + 16
  }));

  const handleFocus = () => {
    animatedValue.value = withTiming(1, { duration: 200 });
  };

  const handleBlur = () => {
    animatedValue.value = withTiming(value ? 1 : 0, { duration: 200 });
    onBlur();
  };

  return {
    value,
    error,
    labelStyle,
    onChange,
    handleBlur,
    handleFocus
  };
};
