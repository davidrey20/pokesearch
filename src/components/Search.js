import React from "react";
import {
  View,
  Text,
  Item,
  Icon,
  Input,
  Header,
  Button,
  Container
} from "native-base";

import { observer, inject } from "mobx-react";

import DataLoading from "./DataLoading";

import SearchBody from "./SearchBody";

@inject("PokeStore")
@observer
class SearchBar extends React.Component {
  render() {
    return (
      <View style={styles.searchContainer}>
        <Input
          placeholder="Enter Pokemon Name"
          style={styles.searchBox}
          value={this.props.PokeStore.pokemonName}
          onChangeText={text => this.props.PokeStore.changePokemonName(text)}
        />
        <Button
          primary
          style={styles.searchButton}
          onPress={this.props.PokeStore.getPokemonData}
        >
          <Icon name="ios-search" />
        </Button>
      </View>
    );
  }
}

@inject("PokeStore")
@observer
class Search extends React.Component {
  static navigationOptions = {
    headerRight: <SearchBar />
  };

  render() {
    let componentToMount;
    if (this.props.PokeStore.isDataLoading == true) {
      componentToMount = <DataLoading />;
    } else {
      componentToMount = <SearchBody />;
    }

    return <View style={styles.imageContainer}>{componentToMount}</View>;
  }
}

const styles = {
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    marginRight: 10
  },
  searchBox: {
    height: 35,
    width: 200,
    borderColor: "#e5e5e5",
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: "#e5e5e5"
  },
  searchButton: {
    height: 35
  }
};

export default Search;
