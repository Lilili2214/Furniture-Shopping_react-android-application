import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import styles from './newrival.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../constants';
import ProductList from '../components/products/ProductList';


const NewRival = ({navigation}) => {
    
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
        <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name='chevron-back-circle' 
            size={30}
            color={COLORS.lightWhite}
            />

            </TouchableOpacity>

            <Text style={styles.heading}>
                Products
            </Text>
        </View>
        <ProductList/>
        </View>
      </SafeAreaView>
  )
}

export default NewRival
