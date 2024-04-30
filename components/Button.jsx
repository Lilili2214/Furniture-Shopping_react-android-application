import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const Button = ({title,onPress, isValid}) => {
    console.log(isValid)
  return (
    
    <TouchableOpacity style={styles.btnStyle(isValid===false? COLORS.lightWhite: COLORS.primary)} onPress={onPress}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnText:{
        fontFamily: "bold",
        color: COLORS.white,
        fontSize: 18
    },
    btnStyle:(backgroundColor)=>({
        height: 50,
        width: "100%",
        marginVertical: 20,
        backgroundColor:backgroundColor,
        justifyContent : 'center',
        alignItems: 'center',
        borderRadius: 12
    })
})