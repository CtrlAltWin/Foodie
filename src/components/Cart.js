import React from "react";
import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";
MenuItems;
const Cart = ({ item }) => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div>
      <div className="flex fles-grow mt-10 justify-center">
        {cartItems.length ? (
          <div className="flex-col bg-gray-100 rounded-lg p-4">
            <MenuItems items={cartItems} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="justify-center">
        
      </div>
    </div>
  );
};

export default Cart;
