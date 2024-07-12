import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { fetchCoinList, searchCoin } from "./apiCall";
import CoinCard from "./components/CoinCard";
import { fetchCurrencyList } from "./apiCall";
import Currencies from "./components/Currencies";

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [coinList, setCoinList] = useState(null);
  const [searchInput, setSearchInput] = useState("bitcoin");
  const [showCurrency, setShowCurrency] = useState(false);
  const [currency, setCurrency] = useState("usd");
  const [coinData, setCoinData] = useState();

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    // const fetchCoinListData = async () => {
    //   try {
    //     const data = await fetchCoinList();
    //     setCoinList(data);
    //     // console.log("Coin List ",data)
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // console.log("Fetch Coin List ", fetchCoinListData());

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

  useEffect(() => {
    const searchFunction = async () => {
      try {
        const data = await searchCoin(searchInput);
        setCoinData(data);
      } catch (err) {
        console.error("Search error:", err);
      }
    };

    if (searchInput) {
      searchFunction();
    }
  }, [searchInput]);

  const handleSearch = (search, currency) => {
    setSearchInput(search);
    setCurrency(currency);
    console.log(search);
    console.log(currency);
  };

  return (
    <>
      <div className="h-screen relative w-full bg-black">
        <Navbar />

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
