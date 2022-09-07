import React from 'react';
import { Text, TextInput, View } from 'react-native';

type PropsInputField = {
  label: string;
  value: string;
  onChangeHandler: (event: any) => void;
  placeholder?: string;
};

const InputField = ({ label, onChangeHandler, placeholder, value }: PropsInputField) => {
  return (
    <View >
      <Text>{label}</Text>
      <TextInput value={value} placeholder={placeholder} onChange={onChangeHandler} />
    </View>
  );
};

export default InputField;