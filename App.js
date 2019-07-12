import React from "react";
import { View, Platform } from "react-native";

import Landing from "./src/components/Landing";
import Search from "./src/components/Search";
import AppContainer from "./src/navigation/AppContainer";

import { Provider } from "mobx-react";
import PokeStore from "./src/stores/PokeStore";

export default function App() {
  return (
    <Provider PokeStore={PokeStore}>
      <AppContainer />
    </Provider>
  );
}
