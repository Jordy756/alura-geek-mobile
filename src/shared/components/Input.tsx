import { globalStyles } from '@constants/global-styles';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface InputProps {
  label: string;
  keyBoardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

const Input = ({ label, keyBoardType = 'default' }: InputProps) => {
  return (
    <View style={styles.inputBox}>
      <Text style={styles.label}>{label}</Text>
      <TextInput keyboardType={keyBoardType} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    position: 'relative'
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
  }
});

export default Input;
