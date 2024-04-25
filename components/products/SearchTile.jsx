import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './searchTile.style'
import { useNavigation } from '@react-navigation/native'



const SearchTile = React.memo(({item}) => {
    const navigation= useNavigation()
  return (
    <View>
        <TouchableOpacity style={styles.container} key= {item._id} onPress={()=>navigation.navigate('ProductDetail', {item: item})}>
       
       <View style={styles.imageContainer}>
       <Image
           source={{uri:item.imageUrl}}
           style={styles.image}
           
           />
       </View>
       <View style={styles.detail}>
           <Text style={styles.title}>{item.title}</Text>
           <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
       </View>
   
</TouchableOpacity>
    </View>
  )
}
)

export default SearchTile