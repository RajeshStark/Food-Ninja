import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import {width, height} from '../../utilities/Dimensions';
import CustomButton from '../../components/CustomButton';
import { useAuth } from '../../contexts/GlobalContext';

export default function UploadPhoto({navigation}) {
  const {colors} = useAuth();
  
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors?.BackgroundColor}]}>
      <Pressable onPress={() => navigation.goBack()}>
      <Image
        source={require('../../assets/IconBack.png')}
        style={styles.backImg}
      />
      </Pressable>
      <Text style={[styles.maintxt, {color: colors?.textColor}]}>Upload Your Photo {'\n'}Profile</Text>
      <Text style={[styles.subtxt, {color: colors?.textColor}]}>
        This data will be displayed in your account{' '}
      </Text>
      <Text style={[styles.subtxt, {marginTop: 10, color: colors?.textColor}]}>
        profile for security
      </Text>

      <TouchableOpacity style={styles.touchable}>
        <Image
          source={require('../../assets/GalleryIcon.png')}
          style={styles.img}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable}>
        <Image
          source={require('../../assets/CameraIcon.png')}
          style={styles.img}
        />
      </TouchableOpacity>

      <View style={styles.btnbox}>
        <CustomButton title="Next" onPress={() => {}} size={0.4} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  backImg: {width: 40, height: 40, marginLeft: 20},
  maintxt: {margin: 20, fontSize: 22, fontWeight: '700'},
  subtxt: {marginLeft: 20, fontSize: 12},
  img: {width: 90, height: 85},
  touchable: {
    width: width * 0.9,
    height: 140,
    backgroundColor: '#fff',
    alignSelf: 'center',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  btnbox: {position: 'absolute', bottom: 20, alignSelf: 'center'},
});
