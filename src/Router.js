import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginScreen from "./components/LoginScreen";
import CowListScreen from "./components/CowListScreen";
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginScreen}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main" hideNavBar>
          <Scene key="cowListScreen" component={CowListScreen} initial />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
