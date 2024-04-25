import React from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native'; 
import { COLORS, SIZES } from '../../constants';
import ProductCartView from './ProductCartView';
import styles from './productRow.style';
import useFetch from '../../hook/useFetch';

const ProductRow = () => {
  const {data, isLoading, error}= useFetch()

  const newdata= data.slice(0,5)

  return (
    <View style={styles.container}>
    {isLoading?(
      <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
    ):error ?(
      <Text>Something went wrong</Text>
    ):(
      <FlatList
      data={newdata}
      keyExtractor={(item)=>{
        item._id
      }}
      renderItem={({ item }) => <ProductCartView key={item._id} item={item}/>} 
      horizontal
      
      contentContainerStyle={{ columnGap: SIZES.medium }}
    />
    )
  }
    </View>
  );
};

export default ProductRow;
