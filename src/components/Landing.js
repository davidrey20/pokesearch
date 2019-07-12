import React from "react";
import { View, Platform, ImageBackground, Text } from "react-native";
import { Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item
} from "react-navigation-header-buttons";

const IoniconsHeaderButton = props => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} />
);

class Landing extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerLeft: (
      <HeaderButtons
        left
        HeaderButtonComponent={IoniconsHeaderButton}
        color="black"
      >
        <Item title="menu" iconName="ios-menu" onPress={() => alert("menu")} />
      </HeaderButtons>
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
          <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
          <Button
            block
            info
            style={styles.buttonStyle}
            onPress={() => this.props.navigation.navigate("Search")}
          >
            <Text style={styles.buttonTextStyle}>Start Searching</Text>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === "android" ? 24 : 0,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: Platform.OS == "android" ? 10 : 0
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 30,
    color: "#3a5ca1"
  },
  buttonStyle: {
    backgroundColor: "#3a5ca1"
  },
  buttonTextStyle: {
    color: "white"
  },
  iconStyle: {
    marginTop: 10
  }
};
