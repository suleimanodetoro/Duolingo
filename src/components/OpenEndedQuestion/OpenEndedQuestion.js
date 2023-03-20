import { View, Text, TextInput, Image } from "react-native";
import React, {useState} from "react";

import styles from "./styles";
import mascotImage from "../../../assets/images/mascot.png";
import Button from "../Button";

const OpenEndedQuestion = (props) => {
  const question = props.question
  const onWrong = props.onWrong
  const onCorrect = props.onCorrect
  const [userInput, setUserInput] = useState("")

  const onButtonPress = () =>{
    if (question.answer.toLowerCase === userInput.toLowerCase) {
      onCorrect();
      setUserInput(null); // to deselect items after pressing button

    } else {
      onWrong();
      
    }
  }
  // const questionItem = 
  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        {/* image */}
        <Image
          source={mascotImage}
          style={styles.mascot}
          resizeMode={"contain"}
        />
        {/* Sentence to be translated */}
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question. text}</Text>
        </View>
      </View>
      {/* Text Input */}
      <TextInput
        multiline
        style={styles.textInput}
        placeholder="Text in english"
        value={userInput}
        onChangeText={setUserInput}
      />
      <Button text={"check"} disabled={false} onPress={onButtonPress}/>
    </>
  );
};

export default OpenEndedQuestion;
