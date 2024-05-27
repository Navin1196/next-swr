"use client";

import { ChangeEvent, useState } from "react";
import { useProducts } from "../Services/queries";
import { axiosInstance } from "../Services/fetcher";

export default function Products() {
  const { data, mutate } = useProducts();

  const [inputValue, setInputValue] = useState("");
  const handleUpdateInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleCreateProduct = async () => {
    await axiosInstance.post("/products", { title: inputValue });
    mutate();
  };
  return (
    <div>
      <p>products:</p>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
      <input
        placeholder="product title"
        value={inputValue}
        onChange={handleUpdateInputValue}
      />
      <button onClick={handleCreateProduct}>Create</button>
    </div>
  );
}
