import React from "react";
import { View, Image, Text, FlatList } from "react-native";
import { ListItem } from "native-base";
import { observer, inject } from "mobx-react";

class FirstSearchPage extends React.Component {
  render() {
    return <Text>Initital Search Page</Text>;
  }
}

@inject("PokeStore")
@observer
class PokemonView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Text style={styles.titleText}>
          {this.props.PokeStore.pokemonDataTitle.name} -{" "}
          {this.props.PokeStore.pokemonDataTitle.id}
        </Text>
        <Image
          style={styles.spriteImage}
          source={{ uri: this.props.PokeStore.pokemonDataTitle.sprite }}
        />
        <View>
          <ListItem>
            <Text>
              Base Experience:{" "}
              {this.props.PokeStore.pokemonDataTable.base_experience}
            </Text>
          </ListItem>
          <ListItem>
            <Text>Height: {this.props.PokeStore.pokemonDataTable.height}</Text>
          </ListItem>
        </View>
      </React.Fragment>
    );
  }
}

@inject("PokeStore")
@observer
class SearchBody extends React.Component {
  render() {
    let componentToMount;
    if (this.props.PokeStore.pokemonDataTitle.name == "") {
      componentToMount = <FirstSearchPage />;
    } else {
      componentToMount = <PokemonView />;
    }
    return <View style={styles.searchBodyView}>{componentToMount}</View>;
  }
}

const styles = {
  searchBodyView: {
    flex: 1,
    alignItems: "center"
  },
  titleText: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    marginTop: 20
  },
  spriteImage: {
    width: 300,
    height: 300
  }
};

export default SearchBody;
