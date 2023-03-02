import {View, Text, SafeAreaView, Image, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {height, width} from '../../utilities/Dimensions';
import CustomButton from '../../components/CustomButton';

export default function Page2({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/Illustration1.png')}
        style={styles.img}
      />

      <View style={styles.subdiv}>
        <Text style={styles.header}>Food Ninja is Where Your  </Text>
        <Text style={styles.header}>Comfort Food Lives</Text>
        <Text style={styles.subheader}>
        Enjoy a fast and smooth food delivery at your doorstep
        </Text>
      </View>
      <CustomButton title='Next' onPress={() => navigation.navigate('login')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    alignSelf: 'center',
  },
  subheader: {
    fontSize: 16,
    color: 'grey',
    alignSelf: 'center',
    marginTop: 20,
  },
  img: {
    width: width,
    height: width * 1.1,
  },
  subdiv: {
    alignSelf: 'center',
    width: width * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
