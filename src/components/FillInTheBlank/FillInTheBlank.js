import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Button from "../Button";
import WordOption from "../WordOption";
import { number } from "prop-types";

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {
  const [parts, setParts] = useState(question.parts); //keep track of all question parts that make up a sentence

  const onButtonPress = () => {
    if (checkAnswer()) {
      onCorrect();
    } else {
      onWrong();
    }
  };
const checkAnswer = () => {
  return (
    parts.filter((part) => part.isBlank && part.selected !== part.text)
      .length === 0
  );
};
  //Adds option to blank by recreating parts state array, and inserting selected variable as text clicked so it is no longer undefined and the word option renders
  const addOptionToSelected = (option) => {
    //Do not add any options thay is already selected
    if (isSelected(option)) {
      return;
    }
    // create a copy of parts array of objects
    const newParts = [...parts];
    //loop through the new array, get to first blank field, and insert option there
    for (let i = 0; i < newParts.length; i++) {
      //if the option is blank and there is nothing selected for it,=>
      if (newParts[i].isBlank && !newParts[i].selected) {
        newParts[i].selected = option;
        //Once the option is filled, break out of loop so it does not set the same option for both
        break;
      }
    }
    setParts(newParts);
  };

  //remove selected option at index
  const removeSelectedAtIndex = (index) => {
    const newParts = [...parts];
    newParts[index].selected = null;
    setParts(newParts);
  };

  const isSelected = (option) => {
    //For each part, check if it is has isBlank, and has a selected value , keep in filtered array
    // If by the end of operation the filtered parts array has options, those options are
    return (
      parts.filter((part) => part.isBlank && part.selected === option).length >
      0
    );
  };
  const answerReady = () => {
    return parts.filter(
      (part) => part.isBlank && !part.selected).length > 0
  };

  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.questionRow}>
        {parts.map((part, index) => {
          // curly braces in maps because using conditional statements
          if (part.isBlank) {
            return (
              <View style={styles.blank}>
                {/* Selected doesn't exist at first so the word option wont render on the blank line*/}
                {/* After an option is clicked, the function take the text value, */}
                {part.selected && (
                  <WordOption
                    //selected doesn't exist so text will be blank in the blank spot initially
                    text={part.selected}
                    onPress={() => {
                      removeSelectedAtIndex(index);
                    }}
                  />
                )}
              </View>
            );
          } else {
            return <Text style={styles.text}>{part.text}</Text>;
          }
        })}
      </View>

      <View style={styles.optionsContainer}>
        {/* Here we will display a list of word option to fill in the blank */}
        {question.options.map((option) => (
          //key prop should be present
          //Anytime a word option is selected, it should turn grey
          <WordOption
            text={option}
            // isSelected={selectedOptions.includes(option)}
            onPress={() => {
              addOptionToSelected(option);
            }}
            isSelected={isSelected(option)}
          />
        ))}
      </View>

      <Button text="Check" disabled={answerReady()} onPress={onButtonPress} />
    </>
  );
};

export default FillInTheBlank;
