// import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Text, View, Image, Alert } from "react-native";

import styles from "./App.styles";
// import questions from "./assets/data/imageMultipleChoiceQuestions";
// import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/";
import questions from "./assets/data/openEndedQuestions";


const App = () => {
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
  //Triggered when a correct answer has been chosen
  const onCorrect = () => {
    setQuestionIndex(questionIndex + 1);
  };
  const onWrong = () => {
    Alert.alert("Wrong");
  };

  return (
    <View style={styles.root}>
      {/* Question text imported from data file */}
      {/* <ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      /> */}
      <OpenEndedQuestion question={currentQuestion} onCorrect={onCorrect} onWrong={onWrong} />
    </View>
  );
};
//style button component and implement quiz logic

export default App;
