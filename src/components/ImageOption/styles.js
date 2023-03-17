import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    optionContainer: {
        // This is to style the border lines around the individual images displayed
        // border
        borderWidth: 2,
        borderBottomWidth: 4,
        borderRadius: 10,
        borderColor: "lightgrey",
    
        // sizing
        width: "48%",
        height: "48%",
    
        // spacing
        padding:10,
    
        // alignment
        justifyContent: "center",
        alignItems: "center",
      },
      optionImage: {
        width: "100%",
        flex: 1, //The image should all available space minus the text
      },
      optionText: {},

})

export default styles