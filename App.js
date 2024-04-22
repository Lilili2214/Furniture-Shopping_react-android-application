import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import BottomTabNavigation from './navigations/BottomTabNavigation';
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf')
  });

  useEffect(() => {
    async function loadFonts() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    loadFonts();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Bottom Navigation'
        component={BottomTabNavigation}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: "semibold",
    fontSize: 20,
  },
});
