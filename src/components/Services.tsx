import React from "react";
import ServiceImage1 from "../assets/delivery.png";
import ServiceImage2 from "../assets/service.png";
import ServiceImage3 from "../assets/products.png";
const Services = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-5 p-5 py-20">
      <div className="border w-80 h-60 border-gray-700 pb-3 shadow-md flex flex-col items-center justify-center p-5 rounded-xl">
        <img src={ServiceImage1} alt="Delivery Service" />
        <h4 className="font-bold text-xl text-gray-500">24hr services for all the customers</h4>
      </div>
      <div className="border w-80 h-60 border-gray-700 pb-3 shadow-md flex flex-col items-center justify-center p-5 rounded-xl">
        <img src={ServiceImage2} alt="Service" />
        <h4 className="font-bold text-xl text-gray-500">Top-rated service all over the country</h4>
      </div>
      <div className="border w-80 h-60 border-gray-700 pb-3 shadow-md flex flex-col items-center justify-center p-5 rounded-xl">
        <img src={ServiceImage3} alt="Products" />
        <h4 className="font-bold text-xl text-gray-500">Wide range of products at competitive prices</h4>
      </div>
    </div>
  );
};

export default Services;
