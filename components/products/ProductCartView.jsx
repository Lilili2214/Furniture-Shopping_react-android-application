import {  TouchableOpacity,Text, View , Image } from 'react-native'
import React from 'react'
import styles from './productCartView.style'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
const ProductCartView = () => {
    const navigation = useNavigation();


    return (
    <TouchableOpacity onPress={()=>navigation.navigate('ProductDetail')}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                source={{uri:"https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg"}}
                style={styles.image}
                
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Product</Text>
                <Text style={styles.supplier} numberOfLines={1}>Product</Text>
                <Text style={styles.price} >VR54827</Text>
                
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>

    </TouchableOpacity>
  )
}

export default ProductCartView

