import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EntryStack from './src/navigation/EntryStack';

export default function App() {
  return (
    <NavigationContainer>
      <EntryStack/>
    </NavigationContainer>
  );
}