import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../constants'



const BackBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ position: 'absolute',zIndex:999}}>
        <Ionicons 
        name='chevron-back-circle'
        size={30}
        style={{marginTop: 35}}
        color={COLORS.primary}
        />
        
    </TouchableOpacity>
  )
}

export default BackBtn

