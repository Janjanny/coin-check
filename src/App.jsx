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
    if (search || search !== "") {
      const searchFunction = async () => {
        try {
          const data = await searchCoin(search);
          setCoinData(data);
          setVisible(true);
        } catch (err) {
          console.error("Search error:", err);
        }
      };
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
