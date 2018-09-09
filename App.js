import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider
} from "react-native-paper";
import LoginScreen from "./src/components/LoginScreen";

export default class App extends React.Component {
  buttonPress() {
    Alert.alert("string");
  }

  render() {
    return (
      <PaperProvider>
        <LoginScreen />
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
