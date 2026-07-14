import api from "./mainApi";
import { useLoaderData } from "react-router";

export const getProducts = async () => {
  try {
    const response = await api.get('/todos/8');
    const data = await response.data;
    console.log('data', data)
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
