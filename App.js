import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider
} from "react-native-paper";
import LoginScreen from "./src/components/LoginScreen";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <PaperProvider>
          <LoginScreen />
        </PaperProvider>
      </Provider>
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
