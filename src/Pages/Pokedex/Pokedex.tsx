import React, { useCallback, useEffect, useState } from "react";
import { PokemonCard } from "../../features/pokemonCard/PokemonCard";
import axios from "axios";
import { StyledPokedex } from "./Pokedex.styles";

export function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/generation/1").then((res) => {
      setPokemonData(res.data.pokemon_species);
    });
  }, []);

  return (
    <StyledPokedex>
      {pokemonData &&
        pokemonData.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} />;
        })}
    </StyledPokedex>
  );
}
