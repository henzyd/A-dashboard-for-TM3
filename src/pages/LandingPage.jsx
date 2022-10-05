import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default LandingPage;
