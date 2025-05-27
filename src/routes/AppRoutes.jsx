import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage";
import { Loginpage } from "../pages/Auth/Loginpage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Loginpage />} />
      {/* Allow Admin to handle sub-routes */}
      {/* <Route path="/admin/*" element={<Admin />} /> */}
    </Routes>
  );
};

export default AppRoutes;
