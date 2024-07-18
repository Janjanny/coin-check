import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "boxicons";
import { ThemeContext } from "../ThemeProvider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Searchbar = ({
  showCurrency,
  setShowCurrency,
  currency,
  setCurrency,
  isVisible,
  setVisible,
  handleSearch,
  coinList,
}) => {
  const heroText =
    "Welcome to CoinCheck, your go-to place for everything about cryptocurrency. Discover the latest trends, detailed analysis, and expert advice on navigating the world of digital currencies.";

  const heroTitle = "CoinCheck";

  // console.log(isVisible)

  const [query, setQuery] = useState("");

  const regex = RegExp(query.toLocaleLowerCase(), "gi");

  const { theme } = useContext(ThemeContext);

  useGSAP(() => {
    gsap.fromTo(
      ".search-bar",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, ease: "power1.inOut", duration: 1 },
    );

    gsap.fromTo(
      ".word",
      { opacity: 0 },
      { opacity: 1, ease: "power1.in", stagger: 0.1, duration: 0.5 },
    );

    gsap.fromTo(
      ".letters",
      { opacity: 0 },
      { opacity: 1, ease: "power1.in", stagger: 0.2, duration: 1 },
    );
  });

  return (
    <div
      className={`relative w-full min-h-screen ${theme != "light" ? "bg-[#fafafa] text-black" : "bg-black text-white"} z-[10] transition-all`}
    >
      <div className="hero text-center w-[90%] leading-tight lg:leading-normal lg:w-[60%] mx-auto relative z-[10] pt-[10rem]">
        <h1
          className={`hero-title flex flex-wrap justify-center font-extrabold text-transparent text-[4.5rem] md:text-[5.5rem] lg:text-8xl bg-clip-text ${theme == "light" ? " text-white-2" : " text-[#111111]"} mb-[0.5rem] cursor-default text-center`}
        >
          {heroTitle.split("").map((letter) => (
            <span className="letters">{letter}</span>
          ))}
        </h1>
        <p className="hero-text text-sm md:text-base cursor-default flex flex-wrap justify-center text-center">
          {heroText.split(" ").map((word) => (
            <span className="word">{word} &nbsp; </span>
          ))}
        </p>
      </div>
      <div
        className={`search-bar ${theme == "light" ? "text-black border-gray-1" : "text-white border-white shadow-lg"} py-4 px-5 w-fit mt-[3rem] mx-auto rounded-xl  border z-[10] `}
        style={{
          background: `${theme == "light" ? "linear-gradient(121deg, rgba(51,51,51,1) 0%, rgba(65,65,65,1) 100%)" : "linear-gradient(0deg, hsla(0, 0%, 96%, 1) 0%, hsla(0, 0%, 98%, 1) 100%)"}`,
        }}
      >
        <div className=" input-div flex items-center gap-4 h-[2.5rem] relative z-[10]">
          <div
            className={`${theme == "light" ? "bg-gray-3 text-white" : "bg-white-2 text-black"} h-full w-[18rem] md:w-[20rem] rounded-lg  justify-between flex items-center py-2 px-3 relative `}
          >
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
              <box-icon
                name="search"
                color={theme == "light" ? "#ffffff" : "#000000"}
              ></box-icon>
            </div>
          </div>

          <div
            className={`${theme == "light" ? "bg-gray-3 text-white" : "bg-white-2 text-black"} h-full flex flex-row items-center gap-1 justify-center rounded-md px-2 cursor-pointer`}
            onClick={() => {
              setShowCurrency(!showCurrency);
            }}
          >
            {currency.toUpperCase()}
            <box-icon
              name="chevron-down"
              color={theme == "light" ? "#ffffff" : "#000000"}
              size="sm"
            ></box-icon>
          </div>
        </div>
      </div>
      <div className="grid-bg absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-[-1] "></div>
    </div>
  );
};

export default Searchbar;
