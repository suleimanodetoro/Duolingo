import { View, Text } from "react-native";
import React, {useState} from "react";
import styles from "./styles";
import Button from "../Button";
import WordOption from "../WordOption";

const FillInTheBlank = ({ question, onCorrect, onWrong }) => {

    const [selected, setSelected] = useState(null);//keep track of all selected options 
    const onButtonPress = ()=>{
      if (selected === question.correct) {
        onCorrect();
        setSelected(null);

        
      } else{
        onWrong();
        setSelected(null);
      }
    }
    
  return (
    <>
      <Text style={styles.title}>Complete the sentence</Text>
      <View style={styles.questionRow}>
        <Text style={styles.text}>
          {question.text}
          <View style={styles.blank}>
            {/* Whatever is selected will be displayed on top of blank view */}
            {selected && <WordOption text={selected} onPress={()=>{setSelected(null)}} /> }

          </View>
        </Text>
      </View>
      <View style={styles.optionsContainer}>
        {/* Here we will display a list of word option to fill in the blank */}
        {question.options.map( (option) => (
          //key prop should be present
          //Anytime a word option is selected, it should turn grey
          <WordOption key={option} text={option} isSelected={selected === option} onPress={()=>{setSelected(option)}}/>
        ))}

      </View>

      <Button
        text="Check"
        disabled={!selected}
        onPress={onButtonPress}
      />
    </>
  );
};

export default FillInTheBlank;
