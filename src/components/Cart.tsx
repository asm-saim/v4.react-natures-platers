import React from "react";
import { IProduct } from "../type/product";

interface CartProps {
  cart: IProduct[];
}
const Cart = ({ cart }: CartProps) => {
  return (
    <div className="max-w-6xl mx-auto p-5 border rounded-lg shadow-md mt-5">
      <h2 className="font-bold text-2xl text-gray-500">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-5 gap-5 p-5 ">
            {cart.map((product) => (
              <div key={product.id} className="border shadow p-2 flex flex-col items-center rounded-lg">
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-lg" />
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-gray-500">${product.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-500">Total:</h3>
            <p className="text-gray-500">${cart.reduce((total, product) => total + product.price, 0).toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
