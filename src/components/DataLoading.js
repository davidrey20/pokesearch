import React from "react";
import { View, Image, Text } from "react-native";

class DataLoading extends React.Component {
  render() {
    return (
      <Image
        source={{
          uri: "https://media.giphy.com/media/l0HlLMeBgzK2UuHVS/giphy.gif"
        }}
        style={styles.imageStyle}
      />
    );
  }
}

const styles = {
  imageStyle: {
    width: 200,
    height: 200
  }
};

export default DataLoading;
