import axios from "axios";

export const fetchCoinList = () => {
    const options = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/list',
        headers: {accept: 'application/json', 'x-cg-api-key': 'CG-JacD25GUAUUFqPP7hoBQ7g3s'}
    };
    
    return axios.request(options).then((response) =>  {
        return response.data
    }).catch((error) => {
        console.log("Error fetching coin list ", error);
        throw error
    });
}


export const searchCoin = (query) => {
    const options = {
        method: 'GET',
        url: `https://api.coingecko.com/api/v3/coins/${query}`,
        headers: {accept: 'application/json', 'x-cg-api-key': 'CG-JacD25GUAUUFqPP7hoBQ7g3s'},
       
    }

    return axios.request(options).then((response) => {
        return response.data;
    }).catch((error) => {
        console.log("Error fetching coin list ", error);
        throw error;
    })
}