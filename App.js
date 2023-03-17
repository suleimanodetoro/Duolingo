import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";

import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption/ImageOption";
import question from "./assets/data/oneQuestionWithOption"


const App = () => {
  const status = 'ok'
  return (
    <View style={styles.root}>
      {/* Question text imported from data file */}
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {/* Dynamically render image options from 'option' array. All maps should ideally have unique key identifier */}
        {question.options.map( (option) => (
          <ImageOption key={option.id}image={option.image} text={option.text}/>
        ) )}

        

      </View>
    </View>
  );
};

export default App;
