import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Set } from "typescript";
import { RootState, AppThunk } from "../../app/store";

export interface PokemonCardState {
  pokemonIndexes: Set<number | void>;
}

const initialState: PokemonCardState = {
  pokemonIndexes: new Set(),
};

export const pokemonCardSlice = createSlice({
  name: "pokemonCard",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<number>) => {
      state.pokemonIndexes.add(action.payload);
    },
    removePokemon: (state, action: PayloadAction<number>) => {
      state.pokemonIndexes.delete(action.payload);
    },
  },
});

export const { addPokemon, removePokemon } = pokemonCardSlice.actions;

export const selectPokemonCards = (state: RootState) => state.pokemonCards;

export default pokemonCardSlice.reducer;
