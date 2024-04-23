import React from 'react';
import { FlatList, Text, View } from 'react-native'; // Import FlatList and other components
import { SIZES } from '../../constants';
import ProductCartView from './ProductCartView';
import styles from './productRow.style';

const ProductRow = () => {
  const products = [1, 2, 3,4];

  return (
    <View style={styles.container}>
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductCartView/>} 
      horizontal
      
      contentContainerStyle={{ columnGap: SIZES.medium }}
    />
    </View>
  );
};

export default ProductRow;
