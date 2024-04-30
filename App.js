import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';
import BottomTabNavigation from './navigations/BottomTabNavigation';
import { Cart, ProductDetail, NewRival, LoginPage, Order, Favorites, Registration } from './screens';

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
        <Stack.Screen
        name='Cart'
        component={Cart}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='ProductDetail'
        component={ProductDetail}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='ProductList'
        component={NewRival}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Login'
        component={LoginPage}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Order'
        component={Order}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Favorites'
        component={Favorites}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name='Registration'
        component={Registration}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


