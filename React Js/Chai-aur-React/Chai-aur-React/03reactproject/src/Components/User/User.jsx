import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="flex justify-center items-center bg-black text-white">
      <h1 className="text-6xl py-24">This is {userId}</h1>
    </div>
  );
};

export default User;
