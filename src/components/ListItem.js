import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";
import { CardSection } from "./common/CardSection";
import MaterialInitials from "react-native-material-initials/native";

class ListItem extends Component {
  renderHeredity(heredity) {
    switch (heredity) {
      case "holstein":
        return (
          <MaterialInitials
            style={{ alignSelf: "flex-end" }}
            backgroundColor={"red"}
            color={"white"}
            size={20}
            text={"H"}
            single={false}
          />
        );
      case "wagyu":
        return (
          <MaterialInitials
            style={{ alignSelf: "flex-end" }}
            backgroundColor={"red"}
            color={"white"}
            size={20}
            text={"W"}
            single={false}
          />
        );
      case "f1":
        return (
          <MaterialInitials
            style={{ alignSelf: "flex-end" }}
            backgroundColor={"red"}
            color={"white"}
            size={20}
            text={"F 1"}
            single={false}
          />
        );

      default:
        return null;
    }
  }

  render() {
    const { private_id, heredity } = this.props.cow;

    return (
      <TouchableHighlight>
        <View style={styles.rootStyle}>
          <View style={styles.leftContainer}>
            <Text style={styles.titleStyle}>{private_id}</Text>
          </View>
          <View />
          <View style={styles.rightContainer}>
            {this.renderHeredity(heredity)}
          </View>
        </View>
      </TouchableHighlight>
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
  },
  rootStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  }
};

export default ListItem;
