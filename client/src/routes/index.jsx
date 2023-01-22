import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "../pages/details";
import HomePage from "../pages/home-page";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<DetailsPage />} />
    </Routes>
  );
};

export default Routing;
