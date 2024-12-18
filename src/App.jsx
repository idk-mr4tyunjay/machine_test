import React from "react";
import Design1 from "./pages/Design1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Design2 from "./pages/Design2";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Design1 />}></Route>
          <Route path="item/:id" element={<Design2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
