import { View, Text, ScrollView, SafeAreaView, Image , TextInput, TouchableOpacity, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import BackBtn from "../components/BackBtn"
import styles from './loginPage.style'
import { Button } from '../components'
import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Yup from "yup"
import { COLORS, localhost } from '../constants'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
const validationSchema= Yup.object().shape({
 
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
})

const LoginPage = ({navigation}) => {
  const [loader, setLoader]= useState(false)
  const [obsecureText, setObsecureText]= useState(false)
  const login = async (values)=>{
    setLoader(true)

    try{
      const response = await axios.post(`http://${localhost}:3000/api/login/`,values )
      const json= await response.data
      setLoader(false)
      const jsonData = {
        userId: json._id,
        token: json.token
      }
      await AsyncStorage.setItem('user', JSON.stringify(jsonData))
      
      navigation.navigate("Profile",{isLogin: true})

    }catch(error){
      console.log(error)
      setLoader(false)
    }
  }
 const isValidForm=()=>{
  Alert.alert(
    "Invalid Form",
    "Please fill all fieds required",
    [
      {
        text: "Cancel", onPress:()=>console.log("Cancelled")
      },
      
      {defaultIndex: 1}
    ]
  )
}

  return (
    <ScrollView>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <View>
          <BackBtn onPress={()=>navigation.goBack()}/>
          <Image
        source={require("../assets/images/bk.png")}
        style={styles.cover}
        />
        <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
        <Formik initialValues={{email: '', password:""}}
        
        validationSchema={validationSchema}
        onSubmit={(values)=>login(values)}
        >
          {({ handleChange, handleBlur, touched,handleSubmit, values, errors, isValid, setFieldTouched }) => (

       <View>
         <View style={styles.wrapper}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWrapper(touched.email?COLORS.secondary: COLORS.offwhite)}>
              <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={COLORS.gray}
              style={styles.iconStyle}
              />
              <TextInput
              placeholder='Enter email'
              onFocus = {()=>{setFieldTouched('email')}}
              onChangeText={handleChange('email')}
              onBlur={()=>{setFieldTouched('email',false)}}
              value={values.email}
              autoCapitalize='none'
              autoCorrect={false}
              style={{flex: 1}}
              />
            </View>
            {touched.email && errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}
        </View>
        <View style={styles.wrapper}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWrapper(touched.password?COLORS.secondary: COLORS.offwhite)}>
              <MaterialCommunityIcons
              name="lock-outline"
              size={20}
              color={COLORS.gray}
              style={styles.iconStyle}
              />
              <TextInput
              placeholder='Enter password'
              onFocus = {()=>{setFieldTouched('password')}}
              onBlur={()=>{setFieldTouched('password', '')}}
              value={values.password}
              onChangeText={handleChange('password')}
              autoCapitalize='none'
              autoCorrect={false}
              style={{flex: 1}}
              />
              <TouchableOpacity onPress={()=>{setObsecureText(!obsecureText)}}>
                <MaterialCommunityIcons
                  name={obsecureText? "eye-outline": 'eye-off-outline'}
                  size={18}
                  style={{marginTop: 18}}
                />
              </TouchableOpacity>
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}
        </View>
        <Button title={"L O G I N"} onPress={isValid? handleSubmit:isValidForm} isValid={isValid} loader = {loader}/>
       <Text style={styles.registration} onPress={()=>navigation.navigate("Registration")}>Registration</Text>
       
       </View>
     )}
        
        </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default LoginPage