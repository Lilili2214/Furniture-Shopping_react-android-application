import {  Text, View , Image} from 'react-native'
import React from 'react'
import { useState } from 'react'
import {Ionicons, SimpleLineIcons,MaterialCommunityIcons, Fontisto} from "@expo/vector-icons"
import styles from './productDetail.style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, SIZES } from '../constants'
const ProductDetail = ({navigation}) => {
    const [count, setCount]= useState(1)
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
                Introducing an elegant and versatile sofa that seamlessly blends style and comfort. This modern L-shaped design features clean lines, plush cushions, and a neutral gray color. Let's explore its key features: **L-Shaped Design**: The unique configuration allows flexible placement in corners or as a striking centerpiece. **Plush Comfort**: Generously padded cushions invite you to sink in and unwind. **Sturdy Build**: Crafted from durable materials, this sofa ensures longevity and stability. **Chic Gray Hue**: The soothing gray upholstery harmonizes effortlessly with any decor. **Chaise Lounge**: One end extends into a cozy chaise lounge—perfect for relaxation or reading. Whether hosting guests, binge-watching shows, or simply unwinding, this gray L-shaped sofa elevates your living space. 🛋️
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

export default ProductDetail

