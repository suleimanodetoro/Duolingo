import { View, Text } from "react-native";
import React from "react";
import ProgressBar from "../ProgressBar";
import styles from "./styles";

const Header = ({progress}) => {
  return (
    //apply style that makes header display as a row
    <View style={styles.root} >
      <ProgressBar progress={progress} />
    </View>
  );
};

export default Header;
