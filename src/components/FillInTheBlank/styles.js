import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: "flex-start",
      },
      questionRow:{
        flexDirection:"row",
        alignSelf:"flex-start",
        marginVertical:10,
        height:70,  // for some reason, if this figure was smaller say 70, it wouldn't display text. figure out later lol
      },
      text:{
        alignSelf:"flex-end",
        fontSize:18
      },
      blank:{
        borderBottomWidth:1,
        borderColor:"grey",
        width:100, // for some reason, if this figure was smaller say 50, it wouldn't display text. figure out later lol

      },
      optionsContainer:{
        flex:1,
        flexDirection:"row",
        flexWrap:"wrap",//display options in new line if it overflows. JustifyContent  wont work if you use this
        alignItems:"center",
        alignContent:"center", 
    
      },

})

export default styles