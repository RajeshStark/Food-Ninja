import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Alert,
  TouchableOpacity,
  useColorScheme
} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../../utilities/Dimensions';
import CustomInput from '../../components/CustomInput';
import {TextInput} from 'react-native-paper';
import CustomButton from '../../components/CustomButton';
import {AppThemeColor} from '../../utilities/colors';
import { useAuth } from '../../contexts/GlobalContext';

export default function Login({navigation}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const colorScheme = useColorScheme();

  const auth = useAuth()
  const {colors} = useAuth();
  

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors?.BackgroundColor}]}>
      <Image source={require('../../assets/Logo.png')} style={styles.img} />

<Text onPress={() => auth.changeTheme('dark')} style={{color: colors?.textColor}}>Change dark Theme</Text>
<Text onPress={() => auth.changeTheme('light')} style={{color: colors?.textColor}}>Change light Theme</Text>


      <View style={styles.btn}>
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

        <Text
          style={{fontSize: 16, fontWeight: '600', color: colors?.textColor, margin: 10}}>
          Or Continue With
        </Text>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => Alert.alert('FB')}
            style={styles.socialbtn}>
            <Image
              source={require('../../assets/FacebookButton.png')}
              style={styles.socialimg}
            />
            <Text style={styles.socialtxt}>FaceBook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Alert.alert('Google')}
            style={styles.socialbtn}>
            <Image
              source={require('../../assets/GoogleButton.png')}
              style={styles.socialimg}
            />
            <Text style={styles.socialtxt}>Google</Text>
          </TouchableOpacity>
        </View>

        <Text
          onPress={() => Alert.alert('Forgot')}
          style={{fontSize: 16, fontWeight: '700', color: AppThemeColor,marginBottom: -10, marginTop: 20}}>
          Forgot Password?
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomButton title="Login to app" onPress={() => {}} size={0.4} />
          <CustomButton title="Create Account" onPress={() => navigation.navigate('signup')} size={0.4} />
        </View>

        <Text style={{fontSize: 16, fontWeight: '700', color: colors?.textColor}}>Don't want to create account?  <Text onPress={() => {}} style={{fontSize: 18, fontWeight: '700', color: AppThemeColor, textDecorationLine: 'underline', }}> Skip! </Text></Text>
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
    marginTop: height * 0.02,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialtxt: {fontSize: 16, fontWeight: '500', marginLeft: 10},
  socialbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    margin: 5,
    padding: 5,
    borderRadius: 10,
    width: width * 0.4,
  },
  socialimg: {width: width * 0.1, height: width * 0.1},
});
