import { API } from "../../../../axiosInstance";

export const fetchCart = () => API.get("/cart");
export const addCart = (data) => API.post("/cart", data);
export const deleteCart = (id) => API.delete(`/cart/${id}`);
