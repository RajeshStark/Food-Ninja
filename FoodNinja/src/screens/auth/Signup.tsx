import {View, Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../../utilities/Dimensions';
import CustomInput from '../../components/CustomInput';
import {Checkbox, TextInput} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import {AppThemeColor} from '../../utilities/colors';
import { useAuth } from '../../contexts/GlobalContext';

export default function Signup({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);
  const {colors} = useAuth();

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors?.BackgroundColor}]}>
      <Image source={require('../../assets/Logo.png')} style={styles.img} />

      <View style={styles.btn}>
        <CustomInput
          label={'Enter your user name'}
          value={username}
          onChangeText={txt => setUsername(txt)}
        />
        <CustomInput
          label={'Enter your email'}
          value={email}
          onChangeText={txt => setEmail(txt)}
        />
        <CustomInput
          label={'Enter your password'}
          value={password}
          onChangeText={txt => setPassword(txt)}
        />

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomButton
            title="Login"
            onPress={() => navigation.goBack()}
            size={0.45}
          />
          <CustomButton title="Create Account" onPress={() => navigation.navigate('uploadphoto')} size={0.45} />
        </View>

        <Text style={{fontSize: 16, fontWeight: '700', color: colors?.textColor}}>
          Don't want to create account?{' '}
          <Text
            onPress={() => {}}
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: AppThemeColor,
              textDecorationLine: 'underline',
            }}>
            Skip!
          </Text>
        </Text>
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
    marginTop: height * 0.1,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
