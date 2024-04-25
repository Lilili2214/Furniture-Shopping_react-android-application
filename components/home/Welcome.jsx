import {  Text, View } from 'react-native'
import React from 'react'
import styles from './welcom.style'
import { COLORS, SIZES } from '../../constants'
import {Feather, Ionicons} from "@expo/vector-icons"
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const Welcome =  React.memo(()  => {
    const navigation = useNavigation()
  return (
    <View>
        
      <View style={styles.container}>
        <Text style ={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}>
         
            Find the Most</Text>
        <Text style ={styles.welcomeTxt(COLORS.primary, 0)}>
            
            Luxurious Furniture</Text>
      </View>
    


    <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Feather  name ="search" size={24} style ={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput 
            value=''
            onPressIn={()=>navigation.navigate("search")}
            style={styles.searchInput}
            placeholder='What are you looking for?'
            />
        </View>
        <View> 
            <TouchableOpacity style={styles.searchBtn}>
                <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite}/>
            </TouchableOpacity>
        </View>
    </View>
    </View>
    
  )
}
)
export default Welcome
