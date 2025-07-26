import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: localStorage.getItem("accessToken") || null,
  setAccessToken: (token) => {
    localStorage.setItem("accessToken", token);
    set({ accessToken: token });
  },
  login: () => set({ isAuth: true }),
  logoutUser: () => {
    localStorage.removeItem("accessToken");
    set({ accessToken: null });
  },
}));
