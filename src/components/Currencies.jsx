import React from "react";
import { sampleCurrencies } from "../apiCall";

const Currencies = ({ currencyList, showCurrency }) => {
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
          <h1>Select Currency</h1>
          {sampleCurrencies.map((currency, index) => (
            <div key={index} className="">
              {currency.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Currencies;
