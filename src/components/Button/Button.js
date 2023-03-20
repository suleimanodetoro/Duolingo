import { View, Pressable, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { PropTypes } from "prop-types";

const Button = (props) => {
  const text = props.text;
  const onPress = props.onPress;
  const disabled = props.disabled;
  return (
    <Pressable
      style={[styles.buttonContainer, disabled ? styles.disabledButton : {}]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[styles.buttonText, disabled ? styles.disabledButtonText : {}]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  text: "Click",
  onPress: () => {},
  disabled: false,
};

export default Button;
