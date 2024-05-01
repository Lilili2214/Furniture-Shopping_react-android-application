import {  Text, View , Image, ScrollView, Alert, TouchableOpacityBase} from 'react-native'
import React, { useState } from 'react'
import styles from './profile.style'
import { StatusBar } from 'expo-status-bar'
import { COLORS, localhost } from '../constants'
import { TouchableOpacity } from 'react-native'
import {AntDesign, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons"
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import { decode } from 'base-64';
import {  useIsFocused } from '@react-navigation/native'

const Profile = ({ navigation}) => {
  const [isLoading, setIsLoading]= useState(false)
  const [userData, setUserData]= useState(null)
  const [userLogin, setUserLogin]= useState(false)
  const [currentSession, setCurrentSession]= useState(null)
  
  const isFocused = useIsFocused()
 
  const fetchSession = async ()=>{
    setIsLoading(true)
    try {
      const session = await AsyncStorage.getItem("user")
      
      if (session){
        const jsonData = await JSON.parse(session)
        checkExpiredToken(jsonData)
        
      }
      
    }
    catch(error){
      console.log(error)
    }

  }
  const clearAsyncStorage = async ()=>{
    try{
      await AsyncStorage.clear()
      setUserLogin(false)

    }catch(error){
      console.log(error)
    }
  }
  
  const checkExpiredToken = async (jsonData)=>{
    
    let token = jsonData.token
    const [headerBase64, payloadBase64] = token.split(".");

    const decodedPayload = decode(payloadBase64);

    const payload = JSON.parse(decodedPayload);

    const expirationTimestamp = payload.exp;
    
    const expirationDate = new Date(expirationTimestamp * 1000); // Multiply by 1000 to convert to milliseconds
    
     const currentTime = new Date()
      
    if (currentTime>= expirationDate){
     
      clearAsyncStorage()      
    }
    else{
        setCurrentSession(jsonData)
      
      setIsLoading(false)
    }
    console.log("Token expiration date:", expirationDate.toISOString())

}
  const getUser = async (id)=>{
    const userInfo = await axios.get(`http://${localhost}:3000/api/user/${id}` )
    setUserData(userInfo.data)
    setUserLogin(true)
  }
  useEffect(() => {
    fetchSession();
    
    
  }, [isFocused]);
  useEffect(() => {
   
    if (currentSession) {

      getUser(currentSession.userId);
     
    }

  }, [currentSession]);
  
  const logout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancelled"),
          style: "cancel", 
        },
        {
          text: "OK",
          onPress: () => {
            clearAsyncStorage();
            setUserLogin(false);
          },
        },
      ],
      { cancelable: false } 
    );
  };
  
const clear_cache= ()=>{
  Alert.alert(
    "Clear Cache",
    "Are you sure you want clear all saved data?",
    [
      {
        text: "Cancel", onPress:()=>console.log("Cancelled")
      },
      {
        text: "Continue", onPress:()=>console.log("All Clear")
      },
      {defaultIndex: 1}
    ]
  )
}
const deleteUser= ()=>{
  Alert.alert(
    "Delete",
    "Are you sure you want to delete your account?",
    [
      {
        text: "Cancel", onPress:()=>console.log("Cancelled")
      },
      {
        text: "Continue", onPress:()=>console.log("Deleted account pressed")
      },
      {defaultIndex: 1}
    ]
  )
}
  if (isLoading)
  {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray}/>
        <View style={{width: "100%"}}>
          <Image
          source={require("../assets/images/space.jpg")}
          style={styles.cover}
        />
        </View>
      </View>
            <View style={styles.profileContainer}>
                <Image
                source={require("../assets/images/profile.jpeg")}
                style={styles.profile}
            />
            <Text style = {styles.name}>
            
              {userLogin===false?"Please login into your account": userData.username}
            </Text>
           <View>
            
            
              {userLogin === false ? (
                
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <View style={styles.loginBtn}>
                    <Text style={styles.menuText}>L O G I N</Text>
                    </View>
                </TouchableOpacity>
           
                ) : (
                  <ScrollView>

                  <View style= {styles.menuWrapper}>
                  <TouchableOpacity onPress={()=>navigation.navigate("Order")}>
                    <View style={styles.menuItem(0.5)}>
                      <MaterialCommunityIcons
                      name="truck-delivery"
                      size={24} 
                      color={COLORS.primary}/>
                      <Text style={styles.menuText}>Orders</Text>
                      
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate("Favorites")}>
                    <View style={styles.menuItem(0.5)}>
                      <MaterialCommunityIcons
                      name="heart-outline"
                      size={24} 
                      color={COLORS.primary}/>
                      <Text style={styles.menuText}>Favorites</Text>
                      
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
                    <View style={styles.menuItem(0.5)}>
                      <SimpleLineIcons
                      name="bag"
                      size={24} 
                      color={COLORS.primary}/>
                      <Text style={styles.menuText}>Cart</Text>
                      
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>clear_cache()}>
                    <View style={styles.menuItem(0.5)}>
                      <MaterialCommunityIcons
                      name="cached"
                      size={24} 
                      color={COLORS.primary}/>
                      <Text style={styles.menuText}>Clear cache</Text>
                      
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>deleteUser()}>
                    <View style={styles.menuItem(0.5)}>
                      <AntDesign
                      name="deleteuser"
                      size={24} 
                      color={COLORS.primary}/>
                      <Text style={styles.menuText}>Delete Acount</Text>
                      
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>logout()}>
                    <View style={styles.menuItem(0.5)}>
                      <AntDesign
                      name="logout"
                      size={24} 
                      color={COLORS.primary}/>
                      <Text style={styles.menuText}>Logout</Text>
                      
                    </View>
                  </TouchableOpacity>

                </View>
                </ScrollView>
              )}
          </View>

      </View>
      
    </View>
  )
}

export default Profile
