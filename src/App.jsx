import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { fetchCoinList, searchCoin } from "./apiCall";
import CoinCard from "./components/CoinCard";
import { fetchCurrencyList } from "./apiCall";
import Currencies from "./components/Currencies";
import ErrorMsg from "./components/ErrorMsg";

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [coinList, setCoinList] = useState(null);
  const [searchInput, setSearchInput] = useState();
  const [showCurrency, setShowCurrency] = useState(false);
  const [currency, setCurrency] = useState("usd");
  const [coinData, setCoinData] = useState();

  const [isVisible, setVisible] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const data = await fetchCurrencyList();
        setCurrencyList(data);
        // console.log(currencyList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCurrencyData();
    // console.log("Fetch Currency Data ", fetchCurrencyData());
  }, []);

  const handleSearch = (search, currency) => {
    if(search.trim() == "") {
      setIsError(true)
    }

    if (search || search !== "") {
      const searchFunction = async () => {
        try {
          const data = await searchCoin(search);
          setCoinData(data);
          setVisible(true);
        } catch (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("Error status", error.response.status);
            console.log("Error data", error.response.data);
            setIsError(true);
          } else if (error.request) {
            // The request was made but no response was received
            console.log("Error request", error.request);
            setIsError(true);
        }
      }}
      setCurrency(currency);
      searchFunction();
    }
  };

  return (
    <>
      <div className="h-screen relative w-full bg-black">
        <Navbar />

        {isError && <ErrorMsg isError={isError} setIsError={setIsError} />}

        <Searchbar
          showCurrency={showCurrency}
          setShowCurrency={setShowCurrency}
          currency={currency}
          setCurrency={setCurrency}
          isVisible={isVisible}
          setVisible={setVisible}
          handleSearch={handleSearch}
        />

        {isVisible && (
          <CoinCard
            isVisible={isVisible}
            setVisible={setVisible}
            coinData={coinData}
            currency={currency}
            isError={isError}
            setCoinData={setCoinData}
          />
        )}

        {showCurrency && (
          <Currencies
            showCurrency={showCurrency}
            setShowCurrency={setShowCurrency}
            currency={currency}
            setCurrency={setCurrency}
            currencyList={currencyList}
          />
        )}
      </div>
    </>
  );
}

export default App;
