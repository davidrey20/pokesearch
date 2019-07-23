import React from "react";
import { View, Image, Text } from "react-native";
import { ListItem } from "native-base";
import { observer, inject } from "mobx-react";

class FirstSearchPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.messageText}>
          Enter Pokemon 'Name' or 'Number' in search bar to display Pokemon
          stats.
        </Text>
        <Image
          source={require("../static/pokeball.jpg")}
          style={styles.pokeballImageStyle}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  messageText: {
    fontSize: 30,
    color: "#3a5ca1",
    textAlign: "center",
    fontWeight: "bold"
  },
  pokeballImageStyle: {
    marginTop: 20,
    width: 50,
    height: 50
  }
};

export default FirstSearchPage;
