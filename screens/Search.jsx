import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './search.styling'

import { Ionicons, Feather } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Ionicons name='camera-outline' size={SIZES.xLarge} style ={styles.searchIcon}/>
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
            <TextInput
            value=''
            onPressIn={()=>{}}
            style={styles.searchInput}
            placeholder='What are you looking for?'
            />
        </View>
        <View> 
            <TouchableOpacity style={styles.searchBtn}>
                <Feather  name ="search" size={24} color={COLORS.offwhite}/>
            </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default Search

