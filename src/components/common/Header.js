import * as React from "react";
import { Appbar } from "react-native-paper";

const Header = ({ onBack, onSearch, onMore, title }) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={onBack} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="search" onPress={onSearch} />
      <Appbar.Action icon="more-vert" onPress={onMore} />
    </Appbar.Header>
  );
};

export { Header };
