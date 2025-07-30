import { create } from "zustand";

export const useBattleStore = create((set) => ({
  opponent1: {},
  opponent2: {},
  setOpponent1: (pokemon) => set({ opponent1: pokemon }),
  setOpponent2: (pokemon) => set({ opponent2: pokemon }),
}));
