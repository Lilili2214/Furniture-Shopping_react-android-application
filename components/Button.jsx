import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import { ActivityIndicator } from 'react-native'

const Button = ({title,onPress, isValid, loader}) => {
    console.log(isValid)
  return (
    
    <TouchableOpacity style={styles.btnStyle(isValid===false? COLORS.lightWhite: COLORS.primary)} onPress={onPress}>
        {loader===false? (<Text style={styles.btnText}>{title}</Text>):(
            <ActivityIndicator/>
        )}
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