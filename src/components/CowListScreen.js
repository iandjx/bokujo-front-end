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
  Title,
  FAB,
  Portal
} from "react-native-paper";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCowsFromAPI } from "../actions";
import { Header } from "./common/Header";
import ListItem from "./common/ListItem";

class CowListScreen extends React.Component {
  componentWillMount() {
    this.props.fetchCowsFromAPI();
  }
  state = {
    open: false
  };
  render() {
    // const { container, text, button, buttonText } = this.styles;
    const { cows, isFetching } = this.props.cows;
    console.log(this.props);
    return (
      <View>
        <Header title="Cow List" />
        <List.Accordion
          title="Accordion"
          left={props => <List.Icon {...props} icon="view-list" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
        <FlatList
          data={cows}
          renderItem={({ item }) => <ListItem cow={item} />}
          keyExtractor={item => item.pub_id}
        />
        <Portal>
          <Text>This is rendered at a different place</Text>
        </Portal>
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
