import React, { MouseEventHandler, SyntheticEvent } from "react";
import { StyledPokemonCard } from "./PokemonCard.styles";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addPokemon, selectPokemonCards } from "./pokemonCardSlice";

const IMG_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export interface PokemonData {
  pokemon: { name: string; url: string };
  onIconClick?: MouseEventHandler;
}

export function PokemonCard({ pokemon, onIconClick }: PokemonData) {
  const dispatch = useAppDispatch();
  const cards = useAppSelector(selectPokemonCards);

  let splitString = pokemon.url.split("/");
  let pokemonIndex = splitString[splitString.length - 2];

  const handleIconClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    dispatch(addPokemon(+e.currentTarget.id));
  };

  const handleCardClick = (e: SyntheticEvent) => {};

  return (
    <StyledPokemonCard onClick={handleCardClick}>
      <AiOutlineHeart
        onClick={onIconClick ? onIconClick : handleIconClick}
        id={pokemonIndex}
      />
      <img
        loading="lazy"
        src={`${IMG_URL}/${pokemonIndex}.png`}
        alt="Pokemon"
      />
      <p>{pokemon.name}</p>
    </StyledPokemonCard>
  );
}
