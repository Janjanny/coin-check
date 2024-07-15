import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import "boxicons";

const Navbar = () => {
  const [isDark, setDark] = useState(true);

  const handleSetDark = () => {
    setDark(!isDark);
  };

  return (
    <div className="text-white w-full mx-auto py-[2rem]  absolute z-[50] top-0">
      {/* <a href='/' className=' font-bold text-3xl'>CoinCheck</a> */}
      <nav className=" w-10/12 mx-auto flex justify-end">
        <div className="icons flex items-center gap-5 ">
          <a
            href="https://github.com/Janjanny/coin-check"
            className="flex items-center"
            target="_blank"
          >
            <box-icon
              type="logo"
              name="github"
              color="#ffffff"
              size="sm"
            ></box-icon>
          </a>
          <div
            className=" cursor-pointer flex items-center"
            onClick={() => {
              handleSetDark();
            }}
          >
            {!isDark ? (
              <box-icon name="sun" color="#ffffff" size="sm"></box-icon>
            ) : (
              <box-icon name="moon" color="#ffffff" size="sm"></box-icon>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
