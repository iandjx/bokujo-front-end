import React from "react";
import {
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  FlatList
} from "react-native";
import { TextInput, Button, withTheme, List } from "react-native-paper";
import { connect } from "react-redux";
// import { cowFetch, getCows } from "../actions";
import { bindActionCreators } from "redux";
import { fetchCowsFromAPI } from "../actions";

import ListItem from "./ListItem";

class CowListScreen extends React.Component {
  render() {
    // const { container, text, button, buttonText } = this.styles;
    const { cows, isFetching } = this.props.cows;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>Redux Example</Text>
        <TouchableHighlight onPress={() => this.props.fetchCowsFromAPI()}>
          <Text>Load People</Text>
        </TouchableHighlight>
        {isFetching && <Text>Loading</Text>}
        {cows.length
          ? cows.map((cow, i) => {
              return (
                <View key={i}>
                  <Text>Name: {cow.private_id}</Text>
                  <Text>Birth Year: {cow.heredity}</Text>
                </View>
              );
            })
          : null}
      </View>
    );
  }
}

const styles = {
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: "center"
  },
  button: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b7eff"
  },
  buttonText: {
    color: "white"
  }
};

const mapStateToProps = state => {
  return {
    cows: state.cows
  };
};

export default connect(
  mapStateToProps,
  { fetchCowsFromAPI }
)(CowListScreen);
