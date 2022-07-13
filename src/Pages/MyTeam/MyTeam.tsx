import React, { SyntheticEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectPokemonCards } from "../../features/pokemonCard/pokemonCardSlice";
import axios, { AxiosResponse } from "axios";
import { PokemonCard } from "../../features/pokemonCard/PokemonCard";
import { removePokemon } from "../../features/pokemonCard/pokemonCardSlice";

export function MyTeam() {
  const dispatch = useAppDispatch();
  const { pokemonIndexes } = useAppSelector(selectPokemonCards);
  const [pokemonTeamData, setPokemonTeamData] = useState([]);

  let requests: Promise<AxiosResponse<any, any>>[] = [];

  pokemonIndexes?.forEach((index) => {
    requests.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`));
  });

  useEffect(() => {
    requests &&
      Promise.all(requests).then((res: any) => {
        console.log(res);
        let buffer: any = [];
        res.forEach((el: any) => {
          buffer.push({ name: el?.data.name, url: el?.data.species.url });
        });
        setPokemonTeamData(buffer);
      });
  }, [pokemonIndexes]);

  const onIconClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    dispatch(removePokemon(+e.currentTarget.id));
  };

  return (
    <>
      My team:
      {pokemonTeamData &&
        pokemonTeamData.map((pokemon) => {
          return <PokemonCard pokemon={pokemon} onIconClick={onIconClick} />;
        })}
    </>
  );
}
