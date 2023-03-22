import { View, Text, Image } from "react-native";
import React from "react";
import ProgressBar from "../ProgressBar";
import styles from "./styles";
import heart from "../../../assets/images/heart.png"

const Header = ({progress, lives}) => {
  return (
    //apply style that makes header display as a row
    <View style={styles.root} >
      <ProgressBar progress={progress} />
      <Image source={heart} resizeMode="contain" style={styles.heartIcon} />
      <Text style={styles.lives}>{lives}</Text>
    </View>
  );
};

export default Header;
