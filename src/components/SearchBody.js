import React from "react";
import { View } from "react-native";
import { observer, inject } from "mobx-react";

import PokemonView from "./PokemonView";
import FirstSearchPage from "./FirstSearchPage";
import ErrorView from "./ErrorView";

@inject("PokeStore")
@observer
class SearchBody extends React.Component {
  render() {
    let componentToMount;

    switch (this.props.PokeStore.componentToRender) {
      case "firstSearch":
        componentToMount = <FirstSearchPage />;
        break;
      case "error":
        componentToMount = <ErrorView />;
        break;
      case "pokemonView":
        componentToMount = <PokemonView />;
        break;
    }

    return <View style={styles.searchBodyView}>{componentToMount}</View>;
  }
}

const styles = {
  searchBodyView: {
    flex: 1,
    alignItems: "center"
  }
};

export default SearchBody;
