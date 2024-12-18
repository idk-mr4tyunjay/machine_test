import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Dash from "../components/Dash";
import axios from "axios";
import { useParams } from "react-router-dom";

const Design2 = () => {

  return (
    <div className="bg-blue-950 p-0 m-0 text-white">
      <Navbar />
      <div className="text-white text-2xl font-semibold flex justify-center m-5">
        <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
          The Lost City of {" "}</span> Fututre Earth
      </div>
      <div className="flex justify-center font-semibold">
        <div className="flex bg-gradient-to-r from-purple-500 to-blue-500 rounded-full py-2 px-5">
          Word explorer
        </div>
        <div className="flex rounded-full py-2 px-5 bg-slate-800">
          Story adventure
        </div>
        <div className="flex bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
          <p className="py-2 mx-5">Brain quest</p>
        </div>
      </div>
      <p className="flex justify-center m-5">
        Drag pictures to the matching words, light up the correct pairs, shake
        for a entry
      </p>
      <Dash/>
    </div>
  );
};

export default Design2;
