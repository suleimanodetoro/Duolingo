import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import ImageOption from "../ImageOption/ImageOption";
import Button from "../Button";
import PropTypes from "prop-types";

const ImageMultipleChoiceQuestion = (props) => {
  const question = props.question;
  const onCorrect = props.onCorrect;
  const onWrong = props.onWrong;
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected.correct) {
      //This logic works, but wont change the question cause state setter is asynchronous and will update on the next render of the code
      onCorrect();
      setSelected(null); // to deselect items after pressing button
    } else {
      onWrong();
      setSelected(null);
    }
  };
  return (
    <>
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {/* Dynamically render image options from 'option' array. All maps should ideally have unique key identifier */}
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            onPress={() => {
              setSelected(option);
            }}
            isSelected={selected?.id === option.id} //logic here works after onPress logic is triggered
          />
        ))}
      </View>
      <Button text={"check"} onPress={onButtonPress} disabled={!selected} />
    </>
  );
};

ImageMultipleChoiceQuestion.propTypes = {
  //Instead of using PropTypes.shape which can be vauge, you use shape and construct your own prop-type according to your specs
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string,
        text: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }).isRequired,
};

export default ImageMultipleChoiceQuestion;
