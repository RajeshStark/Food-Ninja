import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { width } from '../utilities/Dimensions';
import { useAuth } from '../contexts/GlobalContext';

type props = {
    label: string;
    value: string;
    onChangeText : (txt: string) => void;
    right? : JSX.Element;
    left? : JSX.Element;
}

const CustomInput = ({label, value, onChangeText, right, left} : props) => {
   const {colors} = useAuth()
  return (
    <TextInput
      placeholder={label}
      value={value}
      onChangeText={onChangeText}
      style={[styles.txtinput, { color: colors?.textColor, backgroundColor:colors?.cardBackground }]}
      mode={'outlined'}
      outlineStyle={{
        borderColor: colors?.cardBackground,
        borderRadius: 20
    }}
      textColor={'grey'}
      cursorColor={colors?.cardBackground}
      right={right}
      left={left}
      theme={{ colors: { text: colors?.textColor } }}
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

})