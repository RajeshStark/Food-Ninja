import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import {useAuth} from '../contexts/GlobalContext';
import Splash from '../screens/Splash';
import AppStack  from './AppStack';
import AuthStack from './Authstack';
import { StatusBar, useColorScheme } from 'react-native';

const Router = () => {
  const {authData, loading, theme} = useAuth();
  const selected = useColorScheme();
  
  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {
       theme === "system default" ?
(
  selected === 'light' ? 
  <StatusBar backgroundColor={'#fff'} barStyle="dark-content"/>
  :
  <StatusBar backgroundColor={'#000'} barStyle="light-content"/>
)
:
(
  theme === 'light' ? 
  <StatusBar backgroundColor={'#fff'} barStyle="dark-content"/>
  :
  <StatusBar backgroundColor={'#000'} barStyle="light-content"/>
)
        
      }
   
      {authData ? <AppStack /> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default Router;