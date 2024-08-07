import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../ThemeProvider";

import currencySymbols from "../currencySymbols.json";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CoinCard = ({
  isVisible,
  setVisible,
  coinData,
  setCoinData,
  currency,
  isError,
}) => {
  useGSAP(() => {
    gsap.fromTo(
      ".coin-card",
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
  });
  const [coinPrice, setCoinPrice] = useState(0);

  const [convertCoinValue, setConvertCoinValue] = useState(1);
  const [convertCurrencyValue, setConvertCurrencyValue] = useState(coinPrice);

  const [symbol, setSymbol] = useState("");

  const [coin, setCoin] = useState(null);

  const coinToCurrency = (value) => {
    const calculate = value * coinPrice;
    setConvertCurrencyValue(calculate);
  };

  const currencyToCoin = (value) => {
    const calculate = value / coinPrice;
    setConvertCoinValue(calculate);
  };

  const changeSymbol = (currency) => {
    const currencySymbol = currencySymbols.find(
      (item) => item.abbreviation == currency.toUpperCase(),
    );
    return currencySymbol
      ? setSymbol(currencySymbol.symbol)
      : "Currency not found";
  };

  useEffect(() => {
    if (coinData && !isError) {
      const initialCoinPrice = () => {
        setCoinPrice(coinData.market_data.current_price[currency]);
      };

      setCoin(coinData);
      changeSymbol(currency);
      initialCoinPrice();
    }
  }, [coinData, currency]);

  useEffect(() => {
    if (coinPrice) {
      // Reset the input values whenever coinPrice changes (which happens on new search)
      setConvertCoinValue(1);
      setConvertCurrencyValue(coinPrice);
    }
  }, [coinPrice]);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {coin ? (
        <div className="fixed top-0 left-0 w-screen h-screen z-50">
          {/* blur bg */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
          <div
            className={`coin-card relative z-[50]  top-[50%] left-[50%] p-[2rem] rounded-xl w-[28rem] md:w-[33rem] lg:w-[40rem] ${theme == "light" ? "text-white bg-gradient-to-b from-[#1F1F1F] to-[#2B2B2B] border border-gray-1" : "text-black bg-[linear-gradient(0deg,_hsla(0,0%,99%,1)_0%,_hsla(0,0%,95%,1)_100%)]"}`}
            style={{
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`icon absolute right-[2rem] cursor-pointer ${theme == "light" ? "text-white" : "text-black"} hover:text-gray-1 transition-colors ease-linear`}
              onClick={() => {
                setVisible(!isVisible);
                setCoin(null);
                setCoinData(null);
              }}
            >
              <Icon
                icon="material-symbols-light:close"
                style={{ fontSize: "2rem" }}
              />
            </div>
            <div className="row-1 text-sm flex gap-[8px] items-center">
              <div className="div-1 flex items-center gap-[5px]">
                <div className="icon w-[20px] h-[20px] rounded-full ">
                  {" "}
                  <img src={coin.image.small} alt="" />
                </div>
                <p className="coin-name font-medium text-lg">{coin.name}</p>
              </div>
              <div className="div-2 flex items-center text-xs font-light gap-[8px]">
                <p className="name-price font-normal">
                  {coin.symbol.toUpperCase()} Price
                </p>
                <div
                  className={`ranking ${theme == "light" ? "bg-gray-1 " : "bg-white-2 "} px-[6px] py-[2px] text-center rounded"`}
                >
                  #{coin.market_cap_rank}
                </div>
              </div>
            </div>

            <div className="row-2 flex items-center gap-[5px] mb-[.8rem]">
              <h1 className="price text-[2.5rem] font-bold leading-[3.5rem]">
                <span className="currency">{symbol} </span>
                {coinPrice.toLocaleString()}
              </h1>
              <div className="arrow-icon ">
                {coin.market_data.price_change_percentage_24h >= 0 ? (
                  <box-icon
                    name="chevron-up"
                    color="#20D854"
                    size="md"
                  ></box-icon>
                ) : (
                  <box-icon
                    name="chevron-down"
                    color="#FA3025"
                    size="md"
                  ></box-icon>
                )}
              </div>
              <p
                className={`up-percent text-lg ${coin.market_data.price_change_percentage_24h >= 0 ? "text-green-1" : "text-red-600"}`}
              >
                {coin.market_data.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>

            {/* gradient line */}
            <div className="gradient-bar w-full h-[3px] font-bold  bg-white rounded bg-gradient-to-r from-[#FF3333] via-[#B8CE33] to-[#40EB24] "></div>

            <div className="text-sm font-medium flex justify-between mt-[8px]">
              <p className="low">
                <span className="currency">{symbol} </span>
                {coin.market_data.low_24h[currency].toLocaleString()}
              </p>
              <p className="hour-text">24h Range</p>
              <p className="high">
                <span className="currency">{symbol} </span>
                {coin.market_data.high_24h[currency].toLocaleString()}
              </p>
            </div>

            <div className="row-3 text-sm font-normal mt-[1.5rem] grid gap-[8px]">
              <div className="row-3-1 flex justify-between">
                <p>Market Cap</p>
                <p>
                  {symbol}{" "}
                  {coin.market_data.market_cap[currency].toLocaleString()}
                </p>
              </div>

              <div className="row-3-1 flex justify-between">
                <p>Circulating Supply</p>
                <p>{coin.market_data.circulating_supply}</p>
              </div>

              <div className="row-3-1 flex justify-between">
                <p>Max Supply</p>
                <p>{coin.market_data.max_supply}</p>
              </div>
            </div>

            <div className="coin-converter font-bold mt-4">
              <h1 className="mb-4">
                <span>{coin.symbol.toUpperCase()}</span> Converter
              </h1>
              <div
                className={`w-full border ${theme == "light" ? "border-white border-r-white" : "border-black border-r-black"} justify-center flex items-center rounded-md`}
              >
                <div className="coin-input flex items-center pr-3 border-r  w-full pl-2  ">
                  <input
                    type="number"
                    className={`bg-transparent ${theme == "light" ? "text-white" : "text-black"} w-full text-left p-2 focus:outline-none font-normal`}
                    value={convertCoinValue}
                    onChange={(e) => {
                      setConvertCoinValue(e.target.value);
                      coinToCurrency(e.target.value);
                    }}
                  />
                  <p>{coin.symbol.toUpperCase()}</p>
                </div>

                <div className="currency-input flex items-center pl-3 w-full pr-2 ">
                  <p>{currency.toUpperCase()}</p>
                  <input
                    type="number"
                    className={`bg-transparent ${theme == "light" ? "text-white" : "text-black"} w-full text-right p-2 focus:outline-none font-normal`}
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
      ) : (
        <div className=""></div>
        // <div className="fixed top-0 left-0 w-screen h-screen z-50">
        //   {/* blur */}
        //   <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        //   <div className="relative z-[50] text-white top-[50%] left-[50%]">
        //     <div className="spinner"></div>
        //   </div>
        // </div>
      )}
    </>
  );
};

export default CoinCard;
