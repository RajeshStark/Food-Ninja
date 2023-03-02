import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import React from 'react';
import {height, width} from '../../utilities/Dimensions';
import CustomButton from '../../components/CustomButton';

export default function Page1({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/Illustartion.png')}
        style={styles.img}
      />

      <View style={styles.subdiv}>
        <Text style={styles.header}>Find Your Comfort </Text>
        <Text style={styles.header}>Food here</Text>
        <Text style={styles.subheader}>
          Here You Can find a chef or dish for every taste and color. Enjoy!
        </Text>
      </View>
      <CustomButton title='Next' onPress={() => navigation.navigate('page2')}/>
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
