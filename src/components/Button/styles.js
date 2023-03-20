import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:"#58CC02",
        height:50,
        marginVertical:10,


        alignSelf:"stretch",//take up all available horizontal space
        justifyContent: "center", //center center content
        alignItems:"center",//center content

        borderRadius:12,
        borderBottomWidth: 5,
        borderColor:"#57A600"

    },
    buttonText:{
        fontSize:20,
        color:"white",
        fontWeight:"bold",
        textDecorationLine:"underline"
        
    },
    disabledButton:{
        backgroundColor:"lightgrey",
        borderColor:"grey"

    },
    disabledButtonText:{},

})

export default styles;