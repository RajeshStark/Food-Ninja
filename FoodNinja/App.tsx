import React from 'react';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext';
import Router from './src/navigation/EntryStack';

export default function App(){
  return (
    <AuthProvider> 
      <StatusBar backgroundColor={'#fff'} barStyle="dark-content"/>
      <Router />
    </AuthProvider>
  );
};

 App;