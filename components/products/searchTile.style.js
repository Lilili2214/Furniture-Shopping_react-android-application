import { StyleSheet } from "react-native"
import { COLORS, SIZES} from "../../constants"



const styles = StyleSheet.create({
    container:{
       flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SIZES.small,
        flexDirection: "row",
        padding: SIZES.medium,
        borderRadius: SIZES.small,
        backgroundColor: '#fff',
        
        

    },
    imageContainer:{
        width: 80,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image:{
        
        width: "100%",
        height: "100%",
        borderRadius: SIZES.small,
        resizeMode: 'cover'
    },
    detail:{
        marginHorizontal: 20,
        width: "70%"
    },
    title:{
        fontFamily: 'bold',

    }
}) 

export default styles