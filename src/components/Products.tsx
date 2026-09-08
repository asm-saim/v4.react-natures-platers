// import React, { use } from "react";

import { use, useState } from "react";
import { IProduct } from "../type/product";
import { Bounce, toast } from "react-toastify";
import ProductCart from "./ProductCart";

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
              <ProductCart key={product.id} product={product} handleValue={handleValue} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
