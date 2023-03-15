import React from 'react';
import { StatusBar } from 'react-native';
import { GlobalProvider } from './src/contexts/GlobalContext';
import Router from './src/navigation/EntryStack';

export default function App(){
  return (
    <GlobalProvider> 
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content"/>
      <Router />
    </GlobalProvider>
  );
};