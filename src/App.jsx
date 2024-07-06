import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import { fetchCoinList, searchCoin } from './apiCall'

function App() {
  const [coinList, setCoinList] = useState(null);
  const [searchedCoin, setSearchedCoin] = useState('ethereum')

  // useEffect(() => {
  //   const fetchCoinListData = async() => {
  //     try {
  //       const data = await fetchCoinList();
  //       setCoinList(data);
  //       // console.log("Coin List ",data)
  //     }
  //     catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   fetchCoinListData()
  // }, [])

  // function filterCoin(name) {
  //   return coinList && coinList.filter(coin => coin.name.toLowerCase().includes(name.toLowerCase()))
  // }

  // console.log(filterCoin('bitcoin'))

  // const searchResult = async () => {
  //   try {
  //     const data = searchCoin(searchedCoin);
      
  //   }
  // }


  return (
    <>
    
      <div className="h-screen relative w-full bg-black">
        
        <Navbar/>

        
        <Searchbar/>
       

      </div>
    </>
  )
}

export default App
