import React from "react";
import { StyleSheet, View, Text } from "react-native";

function App() {
  let frase = " ola mundo ";

  return (
    <View style={estilo.container}>
      <View>
        <Text style={estilo.inputbox2}> {frase} </Text>
      </View>
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1
  },
  inputbox2: {
    width: 300,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    backgroundColor: "#5092De",
    borderRadius: 20,
    borderColor: "000000",
    borderWidth: 2
  }
});

export default App;
