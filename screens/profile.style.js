import {StyleSheet} from "react-native"

import { COLORS, SIZES } from "../constants"


const styles= StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    cover:{
        resizeMode: "cover",
        width:"100%",
        height: 290
        
    },
    profileContainer:{
        flex: 1,
        alignItems: "center"
    },
    profile:{
        height: 155,
        width: 155,
        borderRadius:999,
        borderColor: COLORS.primary,
        borderWidth: 2
        ,resizeMode: "cover"
        , marginTop: - 180
    },
    name:{
        fontFamily: "bold",
        color: COLORS.primary,
        marginTop: 5,

    },
    loginBtn:{
        backgroundColor: COLORS.secondary ,
        padding: 2 ,
        borderWidth:0.4 ,
        borderColor: COLORS.primary,
        borderRadius: SIZES.xxLarge
    },
    menuText:{
        fontFamily: "bold",
        color: COLORS.gray,
        marginHorizontal: 20,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 26
    }, 
    menuWrapper:{
        marginTop: SIZES.large-20,
        width: SIZES.width- SIZES.large,
        backgroundColor: COLORS.lightWhite, 
        borderRadius: 12,
        marginBottom: 80        
    },
    menuItem : (borderBottomWidth)=>({
        borderBottomWidth: borderBottomWidth,
        flexDirection: "row",
        paddingVertical: 15, 
        paddingHorizontal: 30,
        borderColor: COLORS.gray
    })

})
export default styles