import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../../utilities/Dimensions';
import CustomInput from '../../components/CustomInput';
import { TextInput } from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import {AppThemeColor} from '../../utilities/colors';

export default function Login() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/Logo.png')} style={styles.img} />

      <View style={styles.btn}>
        <CustomInput 
          label={'Enter your user name'}
          value={username}
          onChangeText={(txt) => setUsername(txt)}
        />
         <CustomInput 
          label={'Enter your email'}
          value={email}
          onChangeText={(txt) => setEmail(txt)}
        />
         <CustomInput 
          label={'Enter your password'}
          value={password}
          onChangeText={(txt) => setPassword(txt)}

    />

    <CustomButton title='Create Acount' onPress={() => {}} />
    <Text style={{fontSize: 18, fontWeight: '700', color: AppThemeColor}}>already have an account?</Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
  },
  img: {
    width: width * 0.55,
    height: width * 0.6,
    marginTop: height * 0.1
  },
  btn :{
    alignItems: 'center',
    justifyContent: 'center'
  }
});
