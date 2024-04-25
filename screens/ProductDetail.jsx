import {  Text, View , Image} from 'react-native'
import React from 'react'
import { useState } from 'react'
import {Ionicons, SimpleLineIcons,MaterialCommunityIcons, Fontisto} from "@expo/vector-icons"
import styles from './productDetail.style'
import { TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../constants'
const ProductDetail = React.memo(({ route,navigation }) => {
    const [count, setCount]= useState(2)
    const increment = ()=>{
        if (count<5)
        {
            setCount(count+1)
        }
    }
    const decrement = ()=>{
        if (count>0){
            setCount(count-1)
        }
    }
    const {item} = route.params
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
            source={{uri: item.imageUrl}}
            style={styles.image}
        />
        <View style={styles.details}>
            <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>{item.price}</Text>
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
                    <Text style ={styles.ratingText}> {count}</Text>
                </View>
                
                <View style={styles.rating}>
                    <TouchableOpacity onPress={()=>increment()}>
                        <SimpleLineIcons 
                        name='plus'
                        size={20}
                        />
                    </TouchableOpacity>
                    <Text style={styles.ratingText}>{count}</Text>
                    <TouchableOpacity onPress={()=>decrement()}>
                        <SimpleLineIcons 
                        name='minus'
                        size={20}
                        />
                    </TouchableOpacity>
                </View>
                

            </View>

            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>Description</Text>
                <Text style={styles.descText}>
                {item.description}
                </Text>
            </View>
            
            <View style={{marginBottom: SIZES.small}}>
                <View style={styles.location}>
                    <View style={{flexDirection: 'row'}}>
                        <Ionicons name='location-outline' size={20}/>
                        <Text>CHINA</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
                        <Text>Free Delivery</Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.cartRow}>
                <TouchableOpacity style={styles.cartBtn} onPress={()=>{}}
                >
                    <Text style={styles.cartTitle}>Buy Now</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.addCart} onPress={()=>{}}>
                    <Fontisto name='shopping-bag' size={22} color={COLORS.lightWhite}/>
                    
                </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}
)
export default ProductDetail

