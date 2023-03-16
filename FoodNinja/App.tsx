import React from 'react';
import { GlobalProvider } from './src/contexts/GlobalContext';
import Router from './src/navigation/EntryStack';

export default function App(){
  return (
    <GlobalProvider> 
      <Router />
    </GlobalProvider>
  );
};