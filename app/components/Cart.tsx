"use client";
import { useCart, useUser } from "../Services/queries";

export default function Cart() {
  const cartQuery: any = useCart();
  const userQuery: any = useUser();

  return (
    <div>
      <p>
        userName:{userQuery.isLoading ? "Loading..." : userQuery.data?.userName}
      </p>
      <p>
        userId:
        {cartQuery.data
          ? cartQuery.data?.map((i: any) => i.id)
          : cartQuery.isLoading
          ? "loading..."
          : "no user found"}
      </p>
    </div>
  );
}
