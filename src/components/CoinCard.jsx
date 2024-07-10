import React from "react";

const CoinCard = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50">
        {/* blur bg */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div
          className=" relative z-[50] text-white top-[50%] left-[50%] p-[1.5rem] rounded-lg w-[30rem]"
          style={{
            transform: "translate(-50%, -50%)",
            background:
              "linear-gradient(121deg, rgba(51,51,51,1) 0%, rgba(65,65,65,1) 100%)",
          }}
        >
          <div className="row-1 text-sm flex gap-[8px] items-center">
            <div className="div-1 flex items-center gap-[5px]">
              <div className="icon w-[10px] h-[10px] rounded-full bg-white"></div>
              <p className="coin-name font-bold text-base">Bitcoin</p>
            </div>
            <div className="div-2 flex items-center text-sm font-light">
              <p className="name-price font-normal">BTC Price</p>
              <div className="ranking">#1</div>
            </div>
          </div>

          <div className="row-2 flex items-center gap-[12px]">
            <h1 className="price text-[2.5rem] font-bold">
              <span className="currency">$</span> 000,000
            </h1>
            <div className="arrow-icon">.</div>
            <p className="up-percent text-lg">5.2%</p>
          </div>

          <div className="gradient-bar w-full h-[3px] bg-white"></div>

          <div className="row-3 text-sm font-light mt-[12px]">
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
        </div>
      </div>
    </>
  );
};

export default CoinCard;
