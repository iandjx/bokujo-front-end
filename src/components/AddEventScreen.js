import React from "react";
import { View, AsyncStorage, StyleSheet, Text } from "react-native";
import { TextInput, Button, Surface, withTheme } from "react-native-paper";
import axios from "axios";
import { connect } from "react-redux";
import { credentialUpdate, loginUser } from "../actions";
import { Spinner } from "./common/Spinner";
import { HEAT_DETECTED, INSEMINATED } from "./eventTypes";

class AddEventScreen extends React.Component {
  renderEventType() {
    switch (this.props.selectedEvent) {
      case HEAT_DETECTED:
        return <Text>Heat Detected</Text>;
      case INSEMINATED:
        return <Text>Cow Inseminated</Text>;
      default:
        return <Text>Select Event</Text>;
    }
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
        {this.renderEventType()}
      </View>
    );
  }
}
export default AddEventScreen;
