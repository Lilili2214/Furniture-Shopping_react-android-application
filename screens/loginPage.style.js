import {StyleSheet} from "react-native"
import { COLORS, SIZES } from "../constants"


const styles= StyleSheet.create({
    cover: {
        marginTop: 20,
        height: SIZES.height/2.1,
        width: SIZES.width-40,
        
        marginBottom: SIZES.xxLarge
    },
    title: {
        fontFamily: "bold",
        fontSize: SIZES.xLarge-3,
        color: COLORS.primary,
        alignItems: "center",
        marginBottom: SIZES.xxLarge
    },
    wrapper:{
        marginBottom: 20,
        //marginHorizontal: 20
    },
    label:{
        fontFamily: "regular",
        marginBottom:5 ,
        marginEnd: 5,
        fontSize: SIZES.small,
        textAlign: "right",

    },
    inputWrapper: (borderColor)=>({
        borderColor: borderColor,
        backgroundColor: COLORS.lightWhite,
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: "row",
        height: 55,
        paddingHorizontal: 15,
        alighItem: "center",
        

    }),
    iconStyle:{
        marginRight: 10,
        paddingTop: 15,
    }


})
export default styles
