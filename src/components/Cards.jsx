import React from "react";

const Cards = ({ key, showContent }) => {
  const description = showContent.description.slice(0, 125);
  return (
    <div className="bg-black p-3 flex flex-col text-white rounded-2xl">
      <div className="h-48 overflow-hidden">
        <img
          src={showContent.image.url}
          className="h-full w-full object-contain"
        />
      </div>
      <div>
        <h1 className="font-bold text-lg">{showContent.title}</h1>
        <h2 className="text-sm text-gray-600">{description}....</h2>
      </div>
    </div>
  );
};

export default Cards;
