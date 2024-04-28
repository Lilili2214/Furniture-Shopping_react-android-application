import { View, Text, ScrollView, SafeAreaView, Image , TextInput} from 'react-native'
import React, { useState } from 'react'
import BackBtn from "../components/BackBtn"
import styles from './loginPage.style'
import { Button } from '../components'
import { Formik } from 'formik';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Yup from "yup"
import { COLORS } from '../constants'
const validationSchema= Yup.object().shape({
 
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
})

const LoginPage = ({navigation}) => {
  const {loader, setLoader}= useState()
  const [responseData, setResponseData]= useState(null)
  const [input, setInput]= useState({
    email:"",
    password:""
  })
  const [error, setError]= useState()

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
        onSubmit={(values)=>console.log(values)}
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
              onBlur={()=>{setFieldTouched('email', '')}}
              value='email'
              autoCapitalize='none'
              autoCorrect={false}
              style={{flex: 1}}
              />
            </View>
        </View>
        <Button title={"L O G I N"} onPress={()=>{}}/>
       </View>
     )}
        
        </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default LoginPage