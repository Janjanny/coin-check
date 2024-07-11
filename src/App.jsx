import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import { fetchCoinList, searchCoin } from "./apiCall";
import CoinCard from "./components/CoinCard";

function App() {
  const [coinList, setCoinList] = useState(null);
  const [searchInput, setSearchInput] = useState("bitcoin");

  const [isVisible, setVisible] = useState(true)

  // useEffect(() => {
  //   const fetchCoinListData = async() => {
  //     try {
  //       const data = await fetchCoinList();
  //       setCoinList(data);
  //       console.log("Coin List ",data)
  //     }
  //     catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   fetchCoinListData()
  // }, [])

  useEffect(() => {
    const searchFunction = async () => {
      try {
        const data = await searchCoin(searchInput);
        console.log(data);
      } catch (err) {
        console.log("search error: ", err);
        throw err;
      }
    };

    searchFunction();
  }, []);

  return (
    <>
      <div className="h-screen relative w-full bg-black">
        <Navbar />

        <Searchbar />

        {isVisible && <CoinCard isVisible={isVisible} setVisible={setVisible}/>}
      </div>
    </>
  );
}

export default App;
