// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Image } from "react-native";

import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption/ImageOption";
import question from "./assets/data/oneQuestionWithOption";

const App = () => {
  const [selected, setSelected] = useState(null);
  return (
    <View style={styles.root}>
      {/* Question text imported from data file */}
      <Text style={styles.title}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {/* Dynamically render image options from 'option' array. All maps should ideally have unique key identifier */}
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            image={option.image}
            text={option.text}
            isSelected={selected.id === option.id}
            onPress={()=>{
              setSelected(option)

            }}
          />
        ))}
      </View>
    </View>
  );
};

export default App;
