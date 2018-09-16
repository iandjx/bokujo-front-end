import React from "react";
import { View, AsyncStorage, StyleSheet, Text } from "react-native";
import { TextInput, Button, Surface, withTheme } from "react-native-paper";
import axios from "axios";
import { connect } from "react-redux";
import { credentialUpdate, loginUser } from "../actions";

class LoginScreen extends React.Component {
  state = {
    cows: ""
  };

  onButtonPress() {
    axios
      .post("https://bokujo-rest-api.herokuapp.com/register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => console.log(response));
  }

  onPress() {
    const { username, password } = this.props;
    this.props.loginUser({ username, password });
  }

  render() {
    const { theme } = this.props;
    const { colors } = this.props.theme;

    return (
      <View
        style={[styles.container, { backgroundColor: theme.colors.secondary }]}
      >
        <Surface style={styles.surfaceStyle}>
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Username"
            value={this.props.username}
            onChangeText={value =>
              this.props.credentialUpdate({ prop: "username", value })
            }
          />
          <TextInput
            mode="outlined"
            style={styles.inputContainerStyle}
            label="Password"
            value={this.props.password}
            onChangeText={value =>
              this.props.credentialUpdate({ prop: "password", value })
            }
            secureTextEntry
          />
          <Button
            style={{ margin: 10 }}
            mode="contained"
            onPress={this.onPress.bind(this)}
            disabled={!this.props.username || !this.props.password}
          >
            Login
          </Button>
        </Surface>
      </View>
    );
  }
}
mapStateToProps = state => {
  const { username, password } = state.auth;
  return { username, password };
};

export default connect(
  mapStateToProps,
  { credentialUpdate, loginUser }
)(withTheme(LoginScreen));

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
