// import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Text, View, Image, Alert, ActivityIndicator } from "react-native";

import styles from "./App.styles";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/";
import questions from "./assets/data/allQuestions";
import Header from "./src/components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage"
import FillInTheBlank from "./src/components/FillInTheBlank";


const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[questionIndex]);
  const [lives, setLives] = useState(5);
  //To prevent fllicker due to load data delay, only load entire app when stored data has been loaded. 
  //Scroll down for implementation
  const [hasLoaded, setHasLoaded] = useState(false)

  //go to next question anytime questionIndex in chaged (increased)
  useEffect(() => {
    if (questionIndex >= questions.length) {
      Alert.alert("You've won!");
      setQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[questionIndex]);
    }
  }, [questionIndex]);

  //Load the data only the first time the application is mounted. This is done by passing empty array in useEffect hook
  useEffect(() =>{loadData()},[])

  //Save data everytime live or question index changes in the app.
  useEffect(() => {
    if (hasLoaded) {
      saveData();
    }
  }, [lives, questionIndex, hasLoaded]);

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

  //functions for storing data
  const saveData = async () =>{
    //will write value to lifeInfo file if it doesn't exist, or update file if it exists
    //because async storage is an asynchronous code, await for it to finish execution
    //When using await, you need to make the function async
    //When using save data, you must store values as string and convert them when loading. There are better ways when you are storing JSON
    await AsyncStorage.setItem ('lifeInfo', lives.toString()); 
    await AsyncStorage.setItem ('lastQuestion', questionIndex.toString())

  }
  const loadData = async () =>{
    
    const loadedLives = await AsyncStorage.getItem('lifeInfo')
    //if loaded lives is not null
    if (loadedLives) {
      setLives(parseInt(loadedLives) );
      
    }
    const lastQuestion = await AsyncStorage.getItem('lastQuestion')
    //if retrieved data is not null, set the state variable
    if (lastQuestion) {
      // setCurrentQuestion(0)
      setQuestionIndex(parseInt(lastQuestion));
      
    }
    setHasLoaded(true); 
    

  }
  if (!hasLoaded) {
    return (<ActivityIndicator />);
  }


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
      {currentQuestion.type === "FILL_IN_THE_BLANK" && (
        <FillInTheBlank
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
