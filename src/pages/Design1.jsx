import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Contain from "../components/Contain";

const Design1 = () => {
  return (
    <div className="py-9 bg-[url('https://image.cdn2.seaart.me/2023-06-05/31261162876997/b55eecafa77c51c2ed1b5220b4a9f1b36748430f_high.webp')]">
      <Navbar />
      <Dashboard />
      <Contain />
    </div>
  );
};

export default Design1;
