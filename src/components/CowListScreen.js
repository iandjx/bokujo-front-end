import React from "react";
import {
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  FlatList
} from "react-native";
import {
  TextInput,
  Button,
  withTheme,
  List,
  Card,
  Title
} from "react-native-paper";
import { connect } from "react-redux";
// import { cowFetch, getCows } from "../actions";
import { bindActionCreators } from "redux";
import { fetchCowsFromAPI } from "../actions";

import ListItem from "./ListItem";

class CowListScreen extends React.Component {
  componentWillMount() {
    this.props.fetchCowsFromAPI();
  }
  render() {
    // const { container, text, button, buttonText } = this.styles;
    const { cows, isFetching } = this.props.cows;
    console.log(this.props);
    return (
      <View>
        <FlatList
          data={cows}
          renderItem={({ item }) => <ListItem cow={item} />}
          keyExtractor={item => item.pub_id}
        />

        <Card>
          <Card.Content>
            <Title>Test</Title>

            <Text>text</Text>
          </Card.Content>
        </Card>
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
