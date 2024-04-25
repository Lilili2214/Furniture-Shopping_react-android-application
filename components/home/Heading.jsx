import { Text, View } from 'react-native'
import React from 'react'
import styles from './heading.styling'
import { TouchableOpacity } from 'react-native'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'


const Heading = React.memo(() => { 
  const navigation= useNavigation()
  return (
    <View style={styles.container}>
      <View style= {styles.header}>

      <Text style={styles.headerTitle}>New Rivals</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("ProductList")}>
        <Ionicons name="ios-grid" size={24} color={COLORS.primary}/>

      </TouchableOpacity>
      </View>
    </View>
  )
}
)
export default Heading

