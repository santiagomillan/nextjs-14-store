"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./ShoppingCard.module.sass";
import { useShoppingCart } from "app/hooks/useShoppingCart";

export const ShoppingCard = () => {
  const { cart } = useShoppingCart();
  console.log(cart);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(!isOpen);
  return (
    <button className={styles.ShoppingCart} onClick={handleOpen}>
      <span className={styles.ShoppingCart__counter}>{cart.length}</span>
      <FaShoppingCart />
      {isOpen && (
        <div className={styles.ShoppingCart__items}>
          {cart.map((item) => (
            <>
              <p key={item?.id}>{item?.title}</p>
              <p>Cantidad: {item.quantity}</p>
            </>
          ))}
          <button className={styles.ShoppingCart__buyButton}>Buy</button>
        </div>
      )}
    </button>
  );
};
