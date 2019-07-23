import React from "react";
import { Keyboard } from "react-native";
import { action, observable } from "mobx";

import axios from "axios";

import _ from "lodash";

class PokeStore {
  //variable to manage render after press start searching of Error, First Page or PokemonView
  @observable componentToRender = "firstSearch";
  //Object with Data for Title
  @observable pokemonDataTable = {
    base_experience: 0,
    height: 0,
    weight: 0,
    type: ""
  };
  //Object with Data for Title
  @observable pokemonDataTitle = { name: "", id: 0 };
  //Display spinner whilst data loading
  @observable isDataLoading = false;
  //pokemonName used to manage text in textbox
  @observable pokemonName = "";
  //update pokemon name by getting the leeters entered in textbox
  @action changePokemonName = name => {
    this.pokemonName = name;
    //console.log(this.pokemonName);
  };

  @action getPokemonData = () => {
    Keyboard.dismiss();

    this.isDataLoading = true;
    axios
      .get(
        "https://pokeapi.co/api/v2/pokemon/" +
          this.pokemonName.toLowerCase().trim()
      )
      .then(response => {
        this.pokemonDataTitle = {
          name: _.capitalize(response.data.species.name),
          id: response.data.id,
          sprite: response.data.sprites.front_default
        };
        this.pokemonDataTable = {
          base_experience: response.data.base_experience,
          height: response.data.height,
          weight: response.data.weight,
          type: _.capitalize(response.data.types[0].type.name)
        };
        this.isDataLoading = !this.isDataLoading;
        this.componentToRender = "pokemonView";
      })
      .catch(error => {
        console.log("error caught");
        console.log(error);
        this.componentToRender = "error";
        this.isDataLoading = !this.isDataLoading;
      });

    this.pokemonName = "";
  };
}

const pokeStore = new PokeStore();

export default pokeStore;
