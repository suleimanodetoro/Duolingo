import { Text, View, Image } from 'react-native'
import React from 'react'
import styles from './styles'

import PropTypes from "prop-types"
const ImageOption = (props) => {
  const image= props.image 
  const text= props.text

  return (
    <View style={styles.optionContainer}>
          <Image
            source={{
              uri: props.image,
            }}
            resizeMode="contain"
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>{props.text.toUpperCase()}</Text>
        </View>
  )
}

// Defining prop type is important so code does not break in production when it receives a prop data type it is not expecting.
// Example: passing 42, when expecting '42'
// You can also specify if it is required.
ImageOption.propTypes= {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

// For the instance where text field is not populated in ImageOption
ImageOption.defaultProps ={
  text: "Default",
}

export default ImageOption

