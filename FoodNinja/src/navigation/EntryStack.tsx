import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Page1 from '../screens/onboarding/page1'
import Page2 from '../screens/onboarding/page2'
import Login from '../screens/auth/Login';


const Stack = createNativeStackNavigator();

function EntryStack() {
  const [splash, setSplash] = useState(true);

 useEffect(() => {
   const splashtimer = setTimeout(() => {
    setSplash(false)
   }, 1500);
 
   return () => {
     clearTimeout(splashtimer)
   }
 }, [])
 
  
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
    
      {
        splash ?   <Stack.Screen name="splash" component={Splash} />
        :
        <>
          <Stack.Screen name="page1" component={Page1} />
          <Stack.Screen name="page2" component={Page2} />
          <Stack.Screen name="login" component={Login} />
        </>
      }
    </Stack.Navigator>
  );
}

export default EntryStack;