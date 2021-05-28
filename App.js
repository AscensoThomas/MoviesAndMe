import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search';
import Navigation from "./Navigation/Navigation";
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {

  useEffect(() => {ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);})

  return (
      <Navigation></Navigation>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
