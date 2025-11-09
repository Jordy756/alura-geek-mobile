import { globalStyles } from '@constants/global-styles.constants';
import { useController, useFormContext } from 'react-hook-form';
import { StyleSheet, Text, TextInput, type TextInputProps, View } from 'react-native';

interface InputProps extends Omit<TextInputProps, 'value' | 'onChangeText'> {
  name: string;
  label: string;
}

const Input = ({ label, name, ...rest }: InputProps) => {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, value },
    fieldState: { error }
  } = useController({
    name,
    control
  });

  return (
    <View style={styles.inputBox}>
      {/* <Text style={styles.label}>{label}</Text> */}
      <TextInput
        style={[styles.input, error && styles.inputError]}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        {...rest}
      />
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
    bottom: 12.5,
    left: 0,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    pointerEvents: 'none',
    backgroundColor: globalStyles.neutral50,
    color: globalStyles.neutral600,
    zIndex: 2
  },
  input: {
    paddingTop: 25,
    paddingHorizontal: 10,
    paddingBottom: 5,
    fontSize: 16,
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
    marginHorizontal: 4
  }
});

export default Input;
