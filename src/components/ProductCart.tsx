import React from "react";
import { IProduct } from "../type/product";
interface ProductCartProps {
  product: IProduct;
  handleValue: (product: IProduct) => void;
}

const ProductCart = ({ product, handleValue }: ProductCartProps) => {
  return (
    <div>
      <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
        <img src={product.image} alt={product.name} className="w-full h-24 object-cover rounded-lg mb-4" />
        <h3 className="font-bold text-lg text-gray-500">{product.name}</h3>
        <p className="text-gray-500">${product.price.toFixed(2)}</p>
        <p className="text-gray-500">{product.rating}</p>
        <button
          onClick={() => handleValue(product)}
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
