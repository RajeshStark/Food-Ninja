import {View, Text, Button, StyleSheet, Pressable, Alert} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {width} from '../utilities/Dimensions';

type props = {
  title: string;
  onPress: () => void;
  size?: number;
};

export default function CustomButton({title, onPress, size}: props) {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
      colors={['#4AE188', '#31D180', '#18C177']}
      style={[styles.linearGradient, {  width: typeof(size) == 'undefined' ? width * 0.9 : width * size }]}
      >
      <Text style={styles.buttonText}>{title}</Text>
    </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    padding: 5,
    marginVertical: 20,
    borderRadius: 20,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
