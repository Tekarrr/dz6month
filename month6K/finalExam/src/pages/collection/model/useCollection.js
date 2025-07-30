import { create } from "zustand";

export const useCollectionStore = create((set, get) => ({
  collection: [],
  addToCollection: (pokemon) => {
    const current = get().collection;
    if (!current.some((item) => item.title === pokemon.title)) {
      set({ collection: [...current, pokemon] });
    }
  },

  removeFromCollection: (pokemon) =>
    set({
      collection: get().collection.filter(
        (item) => item.title !== pokemon.title
      ),
    }),
  isInCollection: (title) => {
    return get().collection.some((item) => item.title === title);
  },
}));
