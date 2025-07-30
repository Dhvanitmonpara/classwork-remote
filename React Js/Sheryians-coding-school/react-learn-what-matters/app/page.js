"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { data } from "autoprefixer";

const page = () => {
  const [count, setCount] = useState(20);
  
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos//v2/list");
      const data = response.data;
      setImages(data);
      console.log(images);
    } catch (err) {
      console.error("Error fetching data");
    }
  };

  return (
    <>
      <div className="flex h-36 justify-center items-center">
        <h1 className="mr-10">this is {count}th page</h1>
        <button
          className="bg-red-500 text-white rounded-full h-12 w-32 hover:bg-red-600 active:scale-90 transition-all ease-in-out duration-300"
          onClick={() => {
            setCount(30);
          }}
        >
          Click me
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="w-36 h-14 text-white bg-gray-500 rounded-full hover:bg-gray-600 transition-all ease-in-out duration-300 active:scale-90" onClick={getImages}>Get images</button>
        <div className="grid grid-cols-4">
          {images.map((elem, i) => {
            return <img 
            className="p-10"
            key={i}
            width={300} 
            src={elem.download_url} />;
          })}
        </div>
      </div>
    </>
  );
};

export default page;
