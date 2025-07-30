import { create } from "zustand";
import { addCart, deleteCart, fetchCart } from "../api/useCartApi";

export const useCartStore = create((set, get) => ({
  cart: [],

  fetchCartFromApi: async () => {
    try {
      const response = await fetchCart();
      set({ cart: response.data });
    } catch (error) {
      console.error("Ошибка при загрузке корзины:", error);
    }
  },

  addToCart: async (product) => {
    try {
      await addCart(product);
      await get().fetchCartFromApi();
    } catch (error) {
      console.error("Ошибка при добавлении товара в корзину:", error);
    }
  },

  deleteFromCart: async (productId) => {
    try {
      await deleteCart(productId);
      await get().fetchCartFromApi();
    } catch (error) {
      console.error("Ошибка при удалении товара из корзины:", error);
    }
  },
}));
