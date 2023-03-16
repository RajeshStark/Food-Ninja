import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import {useAuth} from '../contexts/GlobalContext';
import Splash from '../screens/Splash';
import AppStack  from './AppStack';
import AuthStack from './Authstack';
import { StatusBar } from 'react-native';

const Router = () => {
  const {authData, loading, theme} = useAuth();

  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {
        theme == 'light' ?
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content"/>
        :
        <StatusBar backgroundColor={'#000'} barStyle="light-content"/>
      }
   
      {authData ? <AppStack /> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default Router;