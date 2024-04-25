import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React from 'react'
import styles from './productList.style'
import useFetch from '../../hook/useFetch'
import { COLORS, SIZES } from '../../constants'
import ProductCartView from './ProductCartView'

const ProductList = () => {
    const {data, isLoading, error}= useFetch()

  if (isLoading){
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge}
            color={COLORS.primary}
            />
        </View>
      )
  }
  return(
    <View style={styles.container}>
        <FlatList
            data={data}
            keyExtractor={(item) => item._id.toString()} 
            numColumns={2}
            renderItem={({ item }) => <ProductCartView key={item._id} item={item}/>} 
            contentContainerStyle= {styles.container}
            ItemSeparatorComponent= {()=><View style={styles.separator}/>}
        />
    </View>
  )
}

export default ProductList