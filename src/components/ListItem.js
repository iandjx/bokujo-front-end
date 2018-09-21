import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {
  render() {
    const { private_id } = this.props.cow;

    return (
      <View>
        <Text style={styles.titleStyle}>{private_id}</Text>
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    flexDirection: "column"
  },
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  nameStyle: {
    fontWeight: "bold"
  }
};

export default ListItem;
