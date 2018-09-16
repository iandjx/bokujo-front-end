import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button, Surface, withTheme } from "react-native-paper";
import { connect } from "react-redux";
// import {} from "../actions";

class CowListScreen extends React.Component {
  render() {
    return (
      <Button
        style={{ margin: 10 }}
        mode="contained"
        // onPress={this.onPress.bind(this)}
        // disabled={!this.props.username || !this.props.password}
      >
        Test
      </Button>
    );
  }
}

export default CowListScreen;
