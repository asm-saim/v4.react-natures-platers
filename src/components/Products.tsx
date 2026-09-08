// import React, { use } from "react";

import { use, useState } from "react";
import { IProduct } from "../type/product";
import { Bounce, toast } from "react-toastify";

interface IProductsProps {
  userData: Promise<IProduct[]>;
  handleCart: (product: IProduct) => void;
}

const Products = ({ userData, handleCart }: IProductsProps) => {
  const handleValue = (product: IProduct) => {
    // console.log(product);
    handleCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  // console.log(cart);
  const productsInfo = use(userData);
  // console.log(productsInfo);

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="font-bold text-2xl text-gray-500">Our Products</h2>
      <div className="grid grid-cols-12 gap-5 p-5 ">
        <div className="flex items-center justify-center col-span-4 bg-amber-200 h-80 rounded-xl shadow-md">
          <h1 className=" font-bold text-lg text-gray-500 text-center">
            Explore Our Products and find the perfect match for your needs. Always fresh and of the highest quality.
          </h1>
        </div>
        <div className="col-span-8 bg-green-100 rounded-xl shadow-md ">
          <h1 className="font-bold text-xl text-gray-500 text-center">{productsInfo.length} products available</h1>
          <div className="grid grid-cols-3 gap-4 p-4 shadow-md">
            {productsInfo.map((product) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
