import useSWR from "swr";
import { Cart } from "../types/carts";
import { User } from "../types/user";
import { Product } from "../types/product";

export function useUser() {
  return useSWR<User>("/users");
}

export function useCart() {
  const { data } = useUser();
  return useSWR<Cart>(data ? "/carts" : null);
}

export function useProducts() {
  return useSWR<Product[]>("/products");
}
