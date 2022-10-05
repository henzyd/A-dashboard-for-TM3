import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>Home Page</div>
      <Link to={"/report"} className="underline">
        Report or Insight
      </Link>
    </>
  );
};

export default HomePage;
