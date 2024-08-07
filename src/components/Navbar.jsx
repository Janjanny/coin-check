import React, { useContext, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ThemeContext } from "../ThemeProvider";
import "boxicons";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useGSAP(() => {
    gsap.fromTo(
      ".icons > *",
      {
        x: 40,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power1.in",
        duration: 0.5,
        stagger: 0.2,
      },
    );
  });

  return (
    <div className="text-white w-full mx-auto py-[2rem]  absolute z-[50] top-0">
      {/* <a href='/' className=' font-bold text-3xl'>CoinCheck</a> */}
      <nav className="  w-10/12 mx-auto flex justify-end">
        <div className=" icons flex items-center gap-5 ">
          <a
            href="https://github.com/Janjanny/coin-check"
            className="flex items-center"
            target="_blank"
          >
            <box-icon
              type="logo"
              name="github"
              color={`${theme == "light" ? "#ffffff" : "#0a0a0a"}`}
              size="sm"
            ></box-icon>
          </a>
          <div
            className=" cursor-pointer flex items-center"
            onClick={toggleTheme}
          >
            {theme == "light" ? (
              <box-icon name="sun" color="#ffffff" size="sm"></box-icon>
            ) : (
              <box-icon name="moon" color="#0a0a0a" size="sm"></box-icon>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
