import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Router from "./src/Router";

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <PaperProvider>
          <Router />
        </PaperProvider>
      </Provider>
    );
  }
}
