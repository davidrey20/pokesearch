import React from "react";
import { View, Platform, ImageBackground, Text } from "react-native";
import { Button, Header, Left, Icon } from "native-base";

class Landing extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerLeft: (
      <Button transparent>
        <Icon name="menu" />
      </Button>
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="contain"
          source={require("../static/landing.jpg")}
        >
          <View style={styles.backgroundTitle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
          </View>
          <Button
            block
            info
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate("Search")}
          >
            <Text>Start Searching</Text>
          </Button>
        </ImageBackground>
      </View>
    );
  }
}

export default Landing;

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0,
    marginLeft: 10,
    marginRight: 10
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  backgroundTitle: {
    marginTop: 300,
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 30,
    color: "#3a5ca1",
    alignItems: "center"
  },
  buttonStyle: {
    backgroundColor: "#3a5ca1"
  }
};
