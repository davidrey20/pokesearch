import React from "react";
import { View, Image, Text } from "react-native";
import { ListItem } from "native-base";
import { observer, inject } from "mobx-react";

@inject("PokeStore")
@observer
class ErrorView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.messageText}>
          Pokemon Not Found - Search Again.
        </Text>
        <Image
          source={{
            uri: "https://media.giphy.com/media/l0HlLMeBgzK2UuHVS/giphy.gif"
          }}
          style={styles.imageStyle}
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
  imageStyle: {
    marginTop: 20,
    width: 100,
    height: 100
  }
};

export default ErrorView;
