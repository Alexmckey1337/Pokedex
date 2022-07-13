import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import counterReducer from "../features/counter/counterSlice";
import pokemonCardsReducer from "../features/pokemonCard/pokemonCardSlice";

enableMapSet();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemonCards: pokemonCardsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
