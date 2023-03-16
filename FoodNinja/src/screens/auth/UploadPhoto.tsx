import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {width, height} from '../../utilities/Dimensions';
import CustomButton from '../../components/CustomButton';

export default function UploadPhoto() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/IconBack.png')}
        style={styles.backImg}
      />
      <Text style={styles.maintxt}>Upload Your Photo {'\n'}Profile</Text>
      <Text style={styles.maintxt}>
        This data will be displayed in your account{' '}
      </Text>
      <Text style={[styles.maintxt, {marginTop: 10}]}>
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
