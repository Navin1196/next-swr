"use client";

import { useEffect, useState } from "react";
import { post } from "../types/posts";

export default function Old() {
  const [posts, setPosts] = useState<post[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  if (!posts.length) return <p>...loading</p>;
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
