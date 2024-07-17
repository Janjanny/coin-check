import React, { useContext } from "react";
import "boxicons";
import { ThemeContext } from "../ThemeProvider";

const ErrorMsg = ({ isError, setIsError }) => {

  const {theme} = useContext(ThemeContext);



  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50">
        {/* blur bg */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        <div
          className={`relative z-[50] ${theme == 'light' ? 'text-white bg-gradient-to-b from-[#1F1F1F] to-[#2B2B2B] border border-gray-1' : 'text-black bg-[linear-gradient(0deg,_hsla(0,0%,99%,1)_0%,_hsla(0,0%,95%,1)_100%)]'} top-[50%] left-[50%] p-[2rem] rounded-xl w-[20rem] `}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="icon-div flex justify-center items-center mb-5">
            <box-icon name="error-circle" color={theme == 'light' ? '#ffffff' : '#111111'} size="lg"></box-icon>
          </div>
          <p className="text-center">
            Pleaes enter the correct name of the coin.
          </p>

          <div className="buton flex mt-5 justify-center w-full">
            <button
              class="select-none rounded-lg bg-red-500 py-2 px-5 text-center align-middle text-sm font-medium  text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={() => {
                setIsError(!isError);
                console.log(isError);
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorMsg;
