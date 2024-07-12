import React from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";

const CoinCard = ({ isVisible, setVisible, coinData, currency }) => {
  const [coinPrice, setCoinPrice] = useState(0);
  const [convertCoinValue, setConvertCoinValue] = useState(1);
  const [convertCurrencyValue, setConvertCurrencyValue] = useState(coinPrice);

  const coinToCurrency = (value) => {
    const calculate = value * coinPrice;
    setConvertCurrencyValue(calculate);
  };

  const currencyToCoin = (value) => {
    const calculate = value / coinPrice;
    setConvertCoinValue(calculate);
  };

  const initialCoinPrice = () => {
    setCoinPrice(coinData.market_data.current_price.aed)
    
  }

  initialCoinPrice();

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50">
        {/* blur bg */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div
          className=" relative z-[50] text-white top-[50%] left-[50%] p-[2rem] rounded-xl w-[40rem] bg-gradient-to-b from-[#1F1F1F] to-[#2B2B2B] border border-gray-1"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="icon absolute right-[2rem] cursor-pointer text-white hover:text-gray-1 transition-colors ease-linear"
            onClick={() => setVisible(!isVisible)}
          >
            <Icon
              icon="material-symbols-light:close"
              style={{ fontSize: "2rem" }}
            />
          </div>
          <div className="row-1 text-sm flex gap-[8px] items-center">
            <div className="div-1 flex items-center gap-[5px]">
              <div className="icon w-[10px] h-[10px] rounded-full bg-white"></div>
              <p className="coin-name font-medium text-lg">Bitcoin</p>
            </div>
            <div className="div-2 flex items-center text-xs font-light gap-[8px]">
              <p className="name-price font-normal">BTC Price</p>
              <div className="ranking bg-gray-1 px-[6px] py-[2px] text-center rounded">
                #1
              </div>
            </div>
          </div>

          <div className="row-2 flex items-center gap-[12px] mb-[.8rem]">
            <h1 className="price text-[2.5rem] font-bold leading-[3.5rem]">
              <span className="currency">$</span>000,000
            </h1>
            <div className="arrow-icon text-green-1">.</div>
            <p className="up-percent text-lg text-green-1">5.2%</p>
          </div>

          {/* gradient line */}
          <div className="gradient-bar w-full h-[3px] bg-white rounded bg-gradient-to-r from-[#FF3333] via-[#B8CE33] to-[#40EB24] "></div>

          <div className="text-sm font-medium flex justify-between mt-[8px]">
            <p className="low">
              <span className="currency">$</span>400,000
            </p>
            <p className="hour-text">24h Range</p>
            <p className="high">
              <span className="currency">$</span>400,000
            </p>
          </div>

          <div className="row-3 text-xs font-light mt-[1.5rem] grid gap-[8px]">
            <div className="row-3-1 flex justify-between">
              <p>Market Cap</p>
              <p>$500,000</p>
            </div>

            <div className="row-3-1 flex justify-between">
              <p>Circulating Supply</p>
              <p>$500,000</p>
            </div>

            <div className="row-3-1 flex justify-between">
              <p>Max Supply</p>
              <p>$500,000</p>
            </div>
          </div>

          <div className="coin-converter font-bold mt-4">
            <h1 className="mb-4">
              <span>BTC</span> Converter
            </h1>
            <div className="w-full border border-white justify-center flex items-center rounded-md">
              <div className="coin-input flex items-center pr-3 border-r border-r-white w-full pl-2  ">
                <input
                  type="number"
                  className="bg-transparent text-white w-full text-left p-2 focus:outline-none font-normal"
                  value={convertCoinValue}
                  onChange={(e) => {
                    setConvertCoinValue(e.target.value);
                    coinToCurrency(e.target.value);
                  }}
                />
                <p>BTC</p>
              </div>

              <div className="currency-input flex items-center pl-3 w-full pr-2 ">
                <p>USD</p>
                <input
                  type="number"
                  className="bg-transparent text-white w-full text-right p-2 focus:outline-none font-normal"
                  value={convertCurrencyValue}
                  onChange={(e) => {
                    setConvertCurrencyValue(e.target.value);
                    currencyToCoin(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCard;
