import { createAppContainer, createStackNavigator } from "react-navigation";
import Landing from "../components/Landing";
import Search from "../components/Search";

const AppNavigator = createStackNavigator({
  Landing: { screen: Landing },
  Search: { screen: Search }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
