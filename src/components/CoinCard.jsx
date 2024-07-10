import React from "react";

const CoinCard = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50">
        {/* blur bg */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div
          className=" relative z-[50] text-white top-[50%] left-[50%] p-[1.5rem] rounded-lg w-[30rem] bg-gradient-to-b from-[#1F1F1F] to-[#2B2B2B]"
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
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
            <h1>
              <span>BTC</span> Converter
            </h1>
            <div className="w-full border border-white flex">
              <div className="coin-input">
                <input type="number" className="bg-transparent text-white" />
                <p>BTC</p>
              </div>
              <div className="currency-input">
                <p>USD</p>
                <input type="number" className="bg-transparent text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoinCard;
