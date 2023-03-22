// import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Text, View, Image, Alert } from "react-native";

import styles from "./App.styles";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/";
import questions from "./assets/data/allQuestions";
import Header from "./src/components/Header";

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[questionIndex]
  );
  const [lives, setLives] = useState(5);

  //go to next question anytime questionIndex in chaged (increased)
  useEffect(() => {
    if (questionIndex >= questions.length) {
      Alert.alert("You've won!");
      setQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[questionIndex]);
    }
  }, [questionIndex]);
  const restart = () => {
    setQuestionIndex(0);
    setLives(5);
  };

  //Triggered when a correct answer has been chosen
  const onCorrect = () => {
    setQuestionIndex(questionIndex + 1);
  };
  const onWrong = () => {
    if (lives <= 1) {
      Alert.alert("Game Over :(", "Seems you got that wrong 🤔", [
        {
          text: "Try again",
          onPress: restart(),
        },
      ]);
      
    } else {
      Alert.alert("Wrong");
      setLives(lives - 1);
      
    }
  };

  return (
    <View style={styles.root}>
      <Header progress={questionIndex / questions.length} lives={lives} />
      {/* Question text imported from data file */}
      {currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" && (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
      {currentQuestion.type === "OPEN_ENDED" && (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      )}
    </View>
  );
};
//style button component and implement quiz logic

export default App;
