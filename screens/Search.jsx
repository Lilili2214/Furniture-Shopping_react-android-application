import { FlatList, StyleSheet, Text, View , Image} from 'react-native'
import React ,{useState}from 'react'
import styles from './search.styling'

import { Ionicons, Feather } from '@expo/vector-icons'
import { COLORS, SIZES, localhost } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, TouchableOpacity } from 'react-native'
import axios from 'axios'
import SearchTile from '../components/products/SearchTile'
const Search = React.memo(() => {
  const [searchKey, setSearchKey]= useState('')
  const [searchResults, setSearchResults]= useState([])
  const handlePress= async (searchKey)=>{

    try{
      const response = await axios.get(`http://${localhost}:3000/api/products/search/${searchKey}`);
            
      await setSearchResults(response.data);
      console.log(searchResults)
    }catch(error){
      console.log(error)
    }

  }
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Ionicons name='camera-outline' size={SIZES.xLarge} style ={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput
            value={searchKey}
            onChangeText={setSearchKey}
            style={styles.searchInput}
            placeholder='What are you looking for?'
            />
        </View>
        <View> 
            <TouchableOpacity style={styles.searchBtn} onPress={()=>handlePress(searchKey)}>
                <Feather  name ="search" size={24} color={COLORS.offwhite}/>
            </TouchableOpacity>
            
        </View>
        
    </View>
    {searchResults.length===0?(
      <View styles= {styles.imageContainer}>
        
        <Image 
        source={require('../assets/images/Pose23.png')}
        style={styles.searchImage}
        />
      </View>
    ):(
     
        <FlatList
            data={searchResults}
            keyExtractor={(item) => item._id.toString()} 
            numColumns={1}
            renderItem={({ item }) => <SearchTile key={item._id} item={item}/>} 
          
        />
    
    )
  }
    </SafeAreaView>
  )
}
)
export default Search

