import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../images/com.vicman.newprofilepic.icon.2022-06-07-21-33-07-removebg-preview.png";

const Navbar = () => {
  const navLi = [
    {
      id: 1,
      title: "Home",
      linkTo: "/",
    },
    {
      id: 2,
      title: "Menu",
      linkTo: "/about",
    },
    {
      id: 3,
      title: "Menu",
      linkTo: "/faq",
    },
    {
      id: 4,
      title: "Menu",
      linkTo: "/more",
    },
  ];

  //   const [x, setX] = useState("text-yellow-600");
  //   const [y, setY] = useState("");

  //   function changeColor() {
  //     setX("text-yellow-600");
  //     setY("text-white");
  //   }

  return (
    <div className="bg-NavBackgroundColor rounded-lg flex items-center text-white py-2 px-4">
      <Link className="logo text-2xl font-bold pl-4" to={"/"}>
        Logo
      </Link>
      <ul className={`flex items-center gap-14 pl-24`}>
        {navLi.map((item) => (
          <li key={item.id}>
            <Link to={item.linkTo}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <figure className="w-[44px] ml-auto border rounded-full bg-white">
        <img src={profileImg} alt="profileimage" className="w-full" />
      </figure>
    </div>
  );
};

export default Navbar;
