import React, { useContext } from "react";
import { sampleCurrencies } from "../apiCall";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../ThemeProvider";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Currencies = ({
  currencyList,
  showCurrency,
  setShowCurrency,
  currency,
  setCurrency,
}) => {
  const { theme } = useContext(ThemeContext);
  // console.log(theme)

  useGSAP(() => {
    gsap.fromTo(
      ".currency-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.in",
      },
    );

    gsap.fromTo(
      ".currency-button",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.1,
        duration: 0.2,
        stagger: 0.1,
      },
    );
  });

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50">
        {/* blur bg */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div
          className={`currency-card relative z-[50] top-[50%] left-[50%] p-[1.5rem] rounded-lg w-[28rem] md:w-[33rem] lg:w-[40rem] ${theme == "light" ? "text-white bg-[linear-gradient(121deg,_rgba(51,51,51,1)_0%,_rgba(65,65,65,1)_100%)]" : "text-black bg-[linear-gradient(0deg,_hsla(0,0%,99%,1)_0%,_hsla(0,0%,95%,1)_100%)]"}`}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={`icon absolute right-[2rem] cursor-pointer ${theme == "light" ? "text-white" : "text-black"} hover:text-gray-1 transition-colors ease-linear`}
            onClick={() => setShowCurrency(!showCurrency)}
          >
            <Icon
              icon="material-symbols-light:close"
              style={{ fontSize: "1.5rem" }}
            />
          </div>
          <h1 className=" font-bold text-xl">Select Currency</h1>
          <div className="grid grid-cols-6 gap-[1rem] mt-[1.5rem] overflow-auto h-[15rem]">
            {currencyList.map((currency, index) => (
              <div
                key={index}
                className={`currency-button cursor-pointer text-center ${theme == "light" ? "cursor-pointer text-center bg-gray-3 border border-gray-3 hover:border-gray-1 hover:bg-[#1b1b1b] p-2 rounded-md  transition-all ease-linear" : "cursor-pointer text-center bg-white-3 border border-white-3 hover:border-white-1 hover:bg-white-2 p-2 rounded-md  transition-all ease-linear"} p-2 rounded-md  transition-all ease-linear`}
                onClick={() => {
                  setShowCurrency(!showCurrency);
                  setCurrency(currency);
                }}
              >
                {currency.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Currencies;
