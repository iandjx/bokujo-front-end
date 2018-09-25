import { List, Divider } from "react-native-paper";
import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {
  render() {
    const { private_id } = this.props.cow;
    return (
      <TouchableOpacity>
        <List.Item
          title={private_id}
          // right={props => <List.Icon {...props} icon="arrow_right" />}
        />
        <Divider />
      </TouchableOpacity>
    );
  }
}

export default ListItem;
