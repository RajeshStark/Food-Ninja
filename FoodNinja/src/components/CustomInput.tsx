import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { width } from '../utilities/Dimensions';

type props = {
    label: string;
    value: string;
    onChangeText : (txt: string) => void;
    right? : JSX.Element;
    left? : JSX.Element;
}

const CustomInput = ({label, value, onChangeText, right, left} : props) => {

  return (
    <TextInput
      placeholder={label}
      value={value}
      onChangeText={onChangeText}
      style={styles.txtinput}
      mode={'outlined'}
      outlineStyle={styles.outline}
      textColor={'grey'}
      cursorColor={'#fff'}
      right={right}
      left={left}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
    txtinput: {
        width: width * 0.9,
        color: '#fff',
        margin: 10,
        padding: 5
        
    },

    outline:{
        borderColor: '#fff',
        borderRadius: 20
    }
})