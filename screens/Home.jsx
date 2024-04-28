import { View, Text, Modal , TouchableOpacity, Image} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, {PureComponent, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import Welcome from '../components/home/Welcome'
import Carousel from '../components/home/Carousel'
import Heading from '../components/home/Heading'
import ProductRow from '../components/products/ProductRow'
import { SIZES } from '../constants';
const Home= React.memo(()=>{
    
    const [showModal, setShowModal] = useState(true); // Set to true initially

    // Hide the modal when needed (e.g., after user interaction)
    const hideModal = () => {
        setShowModal(false);
        SplashScreen.hide(); // Hide the splash screen
    };
        
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
            {/* <Modal visible={showModal} animationType="slide">
                <View style={{flex: 1}}>
                    <TouchableOpacity onPress={hideModal} style={{position: "absolute",marginLeft: SIZES.width-50, zIndex: 999}}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                        <Image source={require("../assets/images/discount.jpg")} style={{ aspectRatio: 0.5, height: SIZES.height}}/>
                    </View>
                </View>
            </Modal> */}
            
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
)
export default Home

