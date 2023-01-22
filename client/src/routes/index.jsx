import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCourses from "../pages/add-course";
import DetailsPage from "../pages/details";
import HomePage from "../pages/home-page";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<DetailsPage />} />
      <Route path="/add-course" element={<AddCourses />} />
    </Routes>
  );
};

export default Routing;
