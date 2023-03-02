import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { height, width } from '../utilities/Dimensions'

export default function Splash() {
    
  return (
    <SafeAreaView style={{width: width, height: height, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../assets/Logo.png')} style={{width: width * 0.55, height: width * 0.6 }}/>
    </SafeAreaView>
  )
}