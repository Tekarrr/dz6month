import { create } from "zustand";

export const usePokemonsStore = create((set) => ({
  pokemons: [],
  setPokemons: (pokemons) => set({ pokemons }),
}));
