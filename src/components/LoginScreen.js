import React from "react";
import { View, AsyncStorage, StyleSheet, Text } from "react-native";
import { TextInput, Button, Surface, withTheme } from "react-native-paper";
import axios from "axios";
class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  state = {
    username: "",
    password: "",
    cows: ""
  };

  handleChangeText = field => value => {
    this.setState({
      [field]: value
    });
  };
  onButtonPress() {
    axios
      .get("https://bokujo-rest-api.herokuapp.com/cows")
      .then(response => this.setState({ cows: response.data }));
    console.log(this.state.cows);
  }

  render() {
    const { theme } = this.props;
    const { colors } = this.props.theme;

    console.log(colors.secondary);

    return (
      <View
        style={[styles.container, { backgroundColor: theme.colors.secondary }]}
      >
        <Surface style={styles.surfaceStyle}>
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Username"
            value={this.state.username}
            onChangeText={this.handleChangeText("username")}
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Password"
            value={this.state.password}
            onChangeText={this.handleChangeText("password")}
            secureTextEntry
          />
          <Button
            style={{ margin: 10 }}
            mode="contained"
            onPress={this.onButtonPress.bind(this)}
            disabled={!this.state.username || !this.state.password}
          >
            Login
          </Button>
        </Surface>
      </View>
    );
  }

  signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    await AsyncStorage.setItem("username", this.state.username);
    this.props.navigation.navigate("App");
  };
}

export default withTheme(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  },
  surfaceStyle: {
    elevation: 12,
    width: "100%",
    justifyContent: "center",
    padding: 10
  },
  inputContainerStyle: {
    margin: 8
  }
});
