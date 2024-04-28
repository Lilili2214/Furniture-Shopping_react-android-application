import { StyleSheet, Text, View , Image, ScrollView, Alert} from 'react-native'
import React, { useState } from 'react'
import styles from './profile.style'
import { StatusBar } from 'expo-status-bar'
import { COLORS } from '../constants'
import { TouchableOpacity } from 'react-native'
import {AntDesign, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons"
const Profile = ({navigation}) => {
  const [userData, setUserData]= useState(null)
  const [userLogin, setUserLogin]= useState(false)
const logout= ()=>{
  Alert.alert(
    "Log Out",
    "Are you sure you want to log out?",
    [
      {
        text: "Cancel", onPress:()=>console.log("Cancelled")
      },
      
      {defaultIndex: 1}
    ]
  )
}
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
            <Text style={styles.name}>
              {userLogin===true? "Ly Nguyen": "Please login into your account"}
            </Text>
            {
              userLogin=== false?(
                  <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
                    <View style={styles.loginBtn}>
                        <Text style= {styles.menuText}>
                            L O G I N  
                        </Text>
                    </View>
                  </TouchableOpacity>
              ):
              (
                <View style={styles.loginBtn}>
                    <Text style= {styles.menuText}>
                            li@gmail.com
                        </Text>
                </View>
              )
            }
            {
              userLogin=== false ? (
                <View></View>

              ):
              (
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
              )
            }




      </View>
      
    </View>
  )
}

export default Profile
