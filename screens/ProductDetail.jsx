import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

import {Ionicons} from "@expo/vector-icons"
import styles from './productDetail.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
const ProductDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style= {styles.upperRow}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name='chevron-back-circle' size={30}/>

            </TouchableOpacity>
            

            <TouchableOpacity onPress={()=>{}}>
            <Ionicons name='heart' size={30}/>
            

            </TouchableOpacity>
        </View>
        <Image
            source={{uri: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg"}}
            style={styles.image}
        />
        <View style={styles.details}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>Product</Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>$ 299</Text>
                </View>
            
            
            </View>
            <View style={styles.ratingRow}>
                <View style={styles.rating}>
                    {[1,2,3,4,5].map((index)=>(
                        <Ionicons 
                        key={index}
                        name='star'
                        size={24}
                        color="gold"/>
                    ))}
                </View>
            </View>
        </View>
    </View>
  )
}

export default ProductDetail

