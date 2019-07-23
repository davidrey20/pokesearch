import React from "react";
import { View, Image, Text } from "react-native";
import { ListItem } from "native-base";
import { observer, inject } from "mobx-react";

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
            <Text style={styles.tableLabels}>Base Experience: </Text>
            <Text style={styles.tableText}>
              {this.props.PokeStore.pokemonDataTable.base_experience}
            </Text>
          </ListItem>
          <ListItem>
            <Text style={styles.tableLabels}>Height: </Text>
            <Text style={styles.tableText}>
              {this.props.PokeStore.pokemonDataTable.height}
            </Text>
          </ListItem>
          <ListItem>
            <Text style={styles.tableLabels}>Weight: </Text>
            <Text style={styles.tableText}>
              {this.props.PokeStore.pokemonDataTable.weight}
            </Text>
          </ListItem>
          <ListItem>
            <Text style={styles.tableLabels}>Type: </Text>
            <Text style={styles.tableText}>
              {this.props.PokeStore.pokemonDataTable.type}
            </Text>
          </ListItem>
        </View>
      </React.Fragment>
    );
  }
}

const styles = {
  titleText: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    marginTop: 20
  },
  spriteImage: {
    width: 300,
    height: 300
  },
  tableLabels: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold"
  },
  tableText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  }
};

export default PokemonView;
