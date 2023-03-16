import React, { useState, useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import Signup from '../screens/auth/Signup';
import Page1 from '../screens/onboarding/page1';
import Page2 from '../screens/onboarding/page2';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UploadPhoto from '../screens/auth/UploadPhoto';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
    const [isFirst, setIsFirst] = useState(true);

    useEffect(() => {
        getMyStringValue()
    }, [])

    const getMyStringValue = async () => {
        try {
          const data = await AsyncStorage.getItem('IsFirst');
          if(data !== null){
            setIsFirst(false)
          } else{
            setIsFirst(true)
          }
        } catch(e) {
          // read error
        }
      
        console.log('Done.')
      
      }
      
    
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="page1" component={Page1} />
      <Stack.Screen name="page2" component={Page2} />
      <Stack.Screen name="uploadphoto" component={UploadPhoto} />
    </Stack.Navigator>
  );
};

export default AuthStack;