import React from "react";
import { sampleCurrencies } from "../apiCall";
import { Icon } from "@iconify/react";

const Currencies = ({ currencyList, showCurrency, setShowCurrency, currency, setCurrency }) => {


  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50">
        {/* blur bg */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div
          className=" relative z-[50] text-white top-[50%] left-[50%] p-[1.5rem] rounded-lg w-[40rem] bg-gradient-to-b from-[#1F1F1F] to-[#2B2B2B]"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >

<div
            className="icon absolute right-[2rem] cursor-pointer text-white hover:text-gray-1 transition-colors ease-linear"
            onClick={() => setShowCurrency(!showCurrency)}
          >
            <Icon
              icon="material-symbols-light:close"
              style={{ fontSize: "1.5rem" }}
            />
          </div>
          <h1 className=" font-bold text-xl">Select Currency</h1>
          <div className="grid grid-flow-col gap-[2rem] mt-[1.5rem]">
          {sampleCurrencies.map((currency, index) => (
            <div key={index} className=" cursor-pointer text-center bg-gray-3 p-2 rounded-md border border-gray-3 hover:border-gray-1 transition-all ease-linear" onClick={() => {setShowCurrency(!showCurrency); setCurrency(currency.toUpperCase())}}>
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
