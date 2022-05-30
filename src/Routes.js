import React from "react";
import PageBerhasil from "pages/PageBerhasil";
import Enroll from "pages/Enroll";
import HomeLogIn from "pages/HomeLogIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homelogin" element={<HomeLogIn />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/pageberhasil" element={<PageBerhasil />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
