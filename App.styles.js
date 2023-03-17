import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch", //This is to make the width of the text box take up 100% of the line,
  },
  optionsContainer: {
    flex: 1, // You want the entire options container to take up as much space before rendering button, etc
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap", //no item should flow off the screen
    justifyContent: "space-between", //how content is arranged on main axis (horizontal)
    alignContent: "space-between", //because using wrap, use this this to arrange between new wrap line
  },
  
});

export default styles;
