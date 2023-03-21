import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
        backgroundColor:"lightgrey",
        overflow:"hidden",
        height:20,
        borderRadius:10,
        flex:1,
    },
    foreground:{
        flex:1,
        borderRadius:10,
        backgroundColor:"#FAC800"
    },
    highlight:{
        backgroundColor:"FAD131",
        height:5,
        width:"90%",
        borderRadius:5,
        alignSelf:"center",
        marginTop:10,

    }
    
})

export default styles;