import { View, Text, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { height, width } from '../utilities/Dimensions'
import { useAuth } from '../contexts/GlobalContext'
export default function Splash() {

  const {colors} = useAuth()
    
  return (
    <SafeAreaView style={{width: width, height: height, justifyContent: 'center', alignItems: 'center', backgroundColor: colors?.BackgroundColor}}>
      <Image source={require('../assets/Logo.png')} style={{width: width * 0.55, height: width * 0.6 }}/>
    </SafeAreaView>
  )
}