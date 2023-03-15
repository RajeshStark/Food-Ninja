import React from 'react';
import {NavigationContainer} from '@react-navigation/native';


import {useAuth} from '../contexts/GlobalContext';
import Splash from '../screens/Splash';
import AppStack  from './AppStack';
import AuthStack from './Authstack';

const Router = () => {
  const {authData, loading} = useAuth();

  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack/>}
    </NavigationContainer>
  );
};

export default Router;