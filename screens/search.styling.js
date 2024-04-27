import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../constants"



const styles = StyleSheet.create({
    searchContainer:{
        flexDirection: "row",
        justifyContent: 'center',
        marginHorizontal: SIZES.small,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        height: 50
    },
    searchIcon:{
        marginHorizontal: 10,
        color: COLORS.gray,
        marginTop: SIZES.small
    },
    searchWrapper:{
        flex: 1,
        marginRight: SIZES.small,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.small
    },
    searchInput:{
        fontFamily: "regular",
        
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn:{
        width: 50,
        height: "100%",
        backgroundColor: COLORS.primary,
        borderRadius:SIZES.medium,
        justifyContent: 'center',
        alignItems: "center",
    
    },

    imageContainer:{
        flex: 1,
        
        
        
    },
    searchImage:{
        resizeMode: "contain",
        width: SIZES.width- 50,
        height: SIZES.height-200
    },
})
export default styles;