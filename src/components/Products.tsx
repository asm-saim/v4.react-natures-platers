import React from "react";

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="font-bold text-2xl text-gray-500">Our Products</h2>
      <div className="grid grid-cols-12 gap-5 p-5 ">
        <div className="flex items-center justify-center col-span-4 bg-amber-200 h-80 rounded-xl shadow-md">
          <h1 className=" font-bold text-lg text-gray-500 text-center">
            Explore Our Products and find the perfect match for your needs. Always fresh and of the highest quality.
          </h1>
        </div>
        <div className="col-span-8 bg-red-200 h-80 rounded-xl shadow-md"></div>
      </div>
    </div>
  );
};

export default Products;
