import { View, Modal,Text, ScrollView, SafeAreaView, Image , TextInput, TouchableOpacity, Alert} from 'react-native'
import React, { useState } from 'react'
import BackBtn from "../components/BackBtn"
import styles from './loginPage.style'
import { Button } from '../components'
import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Yup from "yup"
import { COLORS, SIZES, localhost } from '../constants'
import axios from 'axios'
import * as SplashScreen from 'expo-splash-screen';
const validationSchema= Yup.object().shape({
    username: Yup.string()
      .min(4, 'Must be at least 4 characters')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    location: Yup.string().min(3,'Invalid location')
  })
const Registration = React.memo(({navigation}) => {
   
    const [loader, setLoader]= useState(false)
    const [showModal, setShowModal] = useState(true); // Set to true initially

    // Hide the modal when needed (e.g., after user interaction)
    const hideModal = () => {
        setShowModal(false);
        SplashScreen.hide(); // Hide the splash screen
    };
  
  const [obsecureText, setObsecureText]= useState(false)
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
const handleSubmit = async (values)=>{
    setLoader(true)
    try{
        console.log(values)
        const response = await axios.post(`http://${localhost}:3000/api/register/`,values )
        const json = await response.data; 
        console.log('Registration response:', json);
        setLoader(false)
        navigation.navigate("Login")
      } catch (error) {
        console.error('Error during registration:', error);
        setLoader(false)
      }

}
if (loader){
    return (
        
            <Modal visible={showModal} animationType="slide">
                   <View style={{flex: 1}}>
                       <TouchableOpacity onPress={hideModal} style={{position: "absolute",marginLeft: SIZES.width-50, zIndex: 999}}>
                           <Text>Close</Text>
                       </TouchableOpacity>
                       <View style={{flex:1}}>
                           <Image source={require("../assets/images/discount.jpg")} style={{ aspectRatio: 0.5, height: SIZES.height}}/>
                       </View>
                   </View>
               </Modal> 
        
    )
}
  
  return (
    <ScrollView>
        <SafeAreaView style={{marginHorizontal: 20}}>
          <View>
            <BackBtn onPress={()=>navigation.goBack()}/>
            <Image
          source={require("../assets/images/bk.png")}
          style={{ 
            height: SIZES.height/4,
            width: SIZES.width-60,
            resizeMode: 'contain',
            marginBottom: SIZES.xxLarge}}
          />
          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
          <Formik initialValues={{username: "",email: "", password:"", location :""}}
          
          validationSchema={validationSchema}
          onSubmit={(values)=>{
            console.log(values)
            handleSubmit(values)}}
          >
            {({ handleChange, handleBlur, touched,handleSubmit, values, errors, isValid, setFieldTouched }) => (
   
   <View>
   <View style={styles.wrapper}>
      <Text style={styles.label}>Username</Text>
      <View style={styles.inputWrapper(touched.username?COLORS.secondary: COLORS.offwhite)}>
        <MaterialCommunityIcons
        name="face-man-profile"
        size={20}
        color={COLORS.gray}
        style={styles.iconStyle}
        />
        <TextInput
        placeholder='Enter username'
        onFocus = {()=>{setFieldTouched('username')}}
        onChangeText={handleChange('username')}
        onBlur={()=>{setFieldTouched('username',false)}}
        value={values.username}
        autoCapitalize='none'
        autoCorrect={false}
        style={{flex: 1}}
        />
      </View>
      {touched.username && errors.username && (
        <Text style={styles.errorMessage}>{errors.username}</Text>
      )}
  </View>
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
  <View style={styles.wrapper}>
      <Text style={styles.label}>Location</Text>
      <View style={styles.inputWrapper(touched.location?COLORS.secondary: COLORS.offwhite)}>
        <MaterialCommunityIcons
        name="lock-outline"
        size={20}
        color={COLORS.gray}
        style={styles.iconStyle}
        />
        <TextInput
        placeholder='Enter location'
        onFocus = {()=>{setFieldTouched('location')}}
        onChangeText={handleChange('location')}
        onBlur={()=>{setFieldTouched('location',false)}}
        value={values.location}
        autoCapitalize='none'
        autoCorrect={false}
        style={{flex: 1}}
        />
      </View>
      {touched.location && errors.location && (
        <Text style={styles.errorMessage}>{errors.location}</Text>
      )}
  </View>
  <Button title={"S I G N U P"} onPress={isValid? handleSubmit:isValidForm} isValid={isValid}/>
 <Text style={styles.registration} onPress={()=>navigation.goBack()}>Log-In</Text>
 
 </View>
    )}
          
          </Formik>
          </View>
        </SafeAreaView>
      </ScrollView>
        
      )
  }
)

export default Registration