import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch", //take up entire row width
    alignItems: "center", //center items on the main axis (vertically )
  },
  mascot: {
    width: 100,
    aspectRatio: 3 / 4,
    margin: 10,
    marginBottom:0,//override margin bottom to zero so mascot touches the textInput field
  },
  sentenceContainer: {
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 5,
    padding:12,
    borderTopLeftRadius: 20
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "#EBEBEB",
    alignSelf: "stretch", //take up entire row width
    flex: 1, //Take up as much remaining space as possible
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    textAlignVertical: "top",
    padding: 10,
    paddingTop: 10,
  },
});

export default styles;
