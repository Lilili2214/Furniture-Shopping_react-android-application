import { StyleSheet, Text, View } from 'react-native'
import React, {PureComponent} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Welcome from '../components/home/Welcome'
import Carousel from '../components/home/Carousel'
import Heading from '../components/home/Heading'
import ProductRow from '../components/products/ProductRow'
class Home extends PureComponent {
    render() {
  return (
    <SafeAreaView>
        <View style= {styles.appBarWrapper}>
            <View style= {styles.appBar}>
                <Ionicons name='location-outline' size={24}/>
                
                <Text style={styles.location}>Shanghai China </Text>
                <View style={{alignItems: "flex-end"}}>
                    <View style={styles.cartCount}>
                        <Text style={styles.cartNumber}>8</Text>
                    </View>
                    <TouchableOpacity >
                        <Fontisto name='shopping-bag' size={24}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <ScrollView>
            <Welcome/>
            <Carousel/>
            <Heading/>
            <ProductRow/>
            
        </ScrollView>
      </SafeAreaView>
  )
}
}
export default Home

