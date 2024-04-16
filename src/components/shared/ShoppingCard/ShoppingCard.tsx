"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./ShoppingCard.module.sass";
import { useShoppingCart } from "app/hooks/useShoppingCart";

export const ShoppingCard = () => {
  const { cart } = useShoppingCart();
  console.log(cart);
  return (
    <button className={styles.ShoppingCart}>
      <span className={styles.ShoppingCart__counter}>{cart.length}</span>
      <FaShoppingCart />
    </button>
  );
};
