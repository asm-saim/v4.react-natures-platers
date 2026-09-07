import React from "react";
import BannerImage from "../assets/Hero Section 1.png";
const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex flex-col items-center justify-center gap-3 mb-5">
        <h1 className="text-6xl font-bold text-emerald-600">Nature's Platers</h1>
        <h2 className="text-2xl font-semibold text-gray-600">
          Delicious,<span className="text-emerald-600"> Fresh</span> & Sustainable
        </h2>
      </div>
      <img className="w-[500px] h-auto" src={BannerImage} alt="Banner" />
    </div>
  );
};

export default Banner;
