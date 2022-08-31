import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center ">
      <div className="flex items-center space-x-2 mb-10">
        <img
          className="rounded-full h-20 w-20"
          src="https://avatars.dicebear.com/api/pixel-art/iqbal.svg"
          alt=""
        />
        <h1 className="text-lg text-white font-bold">Loading the IQBAL DRAW</h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  );
};

export default Loading;
