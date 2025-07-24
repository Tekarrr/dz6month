import { create } from "zustand";


export const useStore = create( (set) =>({
    posts: [],
    isLoading: false,
    error: null,
    fetchData: async () => {
        set({ isLoading: true, error: null });
    
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!response.ok) throw new Error('Ошибка при загрузке');
    
          const result = await response.json();
          set({ posts: result, isLoading: false });
        } catch (error) {
          set({ error: error.message, isLoading: false });
        }
      },
}))