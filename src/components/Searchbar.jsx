import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";

const Searchbar = ({
  showCurrency,
  setShowCurrency,
  currency,
  setCurrency,
  isVisible,
  setVisible,
  handleSearch,
}) => {
  // console.log(isVisible)

  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full min-h-screen bg-black text-white z-[10]">
      <div className="hero text-center w-[90%] leading-tight lg:leading-normal lg:w-[60%] mx-auto relative z-[10] pt-[10rem]">
        <h1 className="font-extrabold text-transparent text-[4.5rem] md:text-[5.5rem] lg:text-8xl bg-clip-text bg-gradient-to-tl from-gray-500 via-[#cbcbcb] to-white mb-[0.5rem] cursor-default text-center">
          CoinCheck
        </h1>
        <p className=" text-sm md:text-base">
          Welcome to CoinCheck, your go-to place for everything about
          cryptocurrency. Discover the latest trends, detailed analysis, and
          expert advice on navigating the world of digital currencies.
        </p>
      </div>
      <div
        className="text-white py-4 px-5 w-fit mt-[3rem] mx-auto rounded-xl border-gray-1 border z-[10]"
        style={{
          background:
            "linear-gradient(121deg, rgba(51,51,51,1) 0%, rgba(65,65,65,1) 100%)",
        }}
      >
        <div className="input-div flex items-center gap-4 h-[2.5rem] relative z-[10]">
          <div className=" bg-gray-3 h-full w-[18rem] md:w-[20rem] rounded-lg text-white justify-between flex items-center py-2 px-3 ">
            <input
              type="text"
              placeholder="Search..."
              className=" bg-transparent text-base focus:outline-none w-[25rem]"
              onChange={(e) => {
                setQuery(e.target.value.toLowerCase());
              }}
            />
            <div
              className="icon cursor-pointer flex items-center justify-center"
              onClick={() => {
                handleSearch(query, currency);
                setVisible(!isVisible);
              }}
            >
              <box-icon name="search" color="#ffffff"></box-icon>
            </div>
          </div>

          <div
            className=" bg-gray-3 h-full flex flex-row items-center gap-1 justify-center rounded-md px-2 cursor-pointer"
            onClick={() => {
              setShowCurrency(!showCurrency);
            }}
          >
            {currency.toUpperCase()}
            <box-icon name="chevron-down" color="#ffffff" size="sm"></box-icon>
          </div>
        </div>

        <div className=" absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-[1] "></div>
      </div>
    </div>
  );
};

export default Searchbar;
