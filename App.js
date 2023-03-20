// import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Text, View, Image, Alert } from "react-native";

import styles from "./App.styles";

import ImageOption from "./src/components/ImageOption/ImageOption";
import questions from "./assets/data/imageMultipleChoiceQuestions";
import Button from "./src/components/Button";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[questionIndex]
  );

  //go to next question anytime questionIndex in chaged (increased)
  useEffect(() => {
    if (questionIndex >= questions.length) {
      Alert.alert("You've won!");
      setQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[questionIndex]);
    }
  }, [questionIndex]);

  const onButtonPress = () => {
    if (selected.correct) {
      //This logic works, but wont change the question cause state setter is asynchronous and will update on the next render of the code
      setQuestionIndex(questionIndex + 1);
      setSelected(null); // to deselect items after pressing button
    } else {
    }
  };
  return (
    <View style={styles.root}>
      {/* Question text imported from data file */}
      <Text style={styles.title}>{currentQuestion.question}</Text>

      <View style={styles.optionsContainer}>
        {/* Dynamically render image options from 'option' array. All maps should ideally have unique key identifier */}
        {currentQuestion.options.map((option) => (
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
    </View>
  );
};
//style button component and implement quiz logic

export default App;
