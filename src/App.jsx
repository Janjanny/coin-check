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
    const fetchCoinListData = async () => {
      try {
        const data = await fetchCoinList();
        setCoinList(data);
        // console.log("Coin List ",data)
      } catch (err) {
        console.log(err);
      }
    };

    const fetchCurrencyData = async () => {
      try {
        const data = await fetchCurrencyList();
        setCurrencyList(data);
        console.log(currencyList);
      } catch (error) {
        console.log(error);
      }
    };

    const searchFunction = async () => {
      try {
        const data = await searchCoin(searchInput);
        setCoinData(data)
        console.log(data);
      } catch (err) {
        console.log("search error: ", err);
        throw err;
      }
    };

    console.log('Coin Data', searchFunction());
    console.log('Fetch Currency Data ', fetchCurrencyData() );
    console.log("Fetch Coin List ", fetchCoinListData());
  }, []);

  {coinData && console.log('Price', coinData.market_data.current_price.usd)}

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
        />

        {isVisible && (
          <CoinCard isVisible={isVisible} setVisible={setVisible} coinData={coinData} currency={currency}/>
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
