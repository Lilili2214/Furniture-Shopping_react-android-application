import {StyleSheet} from "react-native"
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    wrapper:{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow:{
        flexDirection: "row",
        justifyContent:"flex-start",
        alignItems: "center",
        position: "absolute",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.large,
        marginHorizontal: SIZES.large,
        top: SIZES.large,
        zIndex: 999,
        width: SIZES.width-50,

    },
    heading:{
        fontFamily: 'semibold',
        fontSize: SIZES.medium,
        color: COLORS.lightWhite,
        marginLeft: 8,

    }

})

export default styles