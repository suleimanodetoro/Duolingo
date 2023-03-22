import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

import PropTypes from "prop-types";
const ImageOption = (props) => {
  const image = props.image;
  const text = props.text;
  const isSelected = props.isSelected
  const onPress = props.onPress

  return (
    <Pressable
    onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]
    }
    >
      <Image
        source={{
          uri: image,
        }}
        resizeMode="contain"
        style={styles.optionImage}
      />
      <Text
        style={[styles.optionText, isSelected ? styles.selectedText : {}]}
      >
        {text.toUpperCase()}
      </Text>
    </Pressable>
  );
};

// Defining prop type is important so code does not break in production when it receives a prop data type it is not expecting.
// Example: passing 42, when expecting '42'
// You can also specify if it is required.
ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  isSelected: PropTypes.bool,

};

// For the instance where text field is not populated in ImageOption
ImageOption.defaultProps = {
  text: "Default",
  onPress: () => {},
  isSelected: false,
};

export default ImageOption;
