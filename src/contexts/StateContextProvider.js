import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const getResults = async (url) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${url}`, {
	method: 'GET',
	hostname: 'google-search72.p.rapidapi.com',
	port: null,
	path: '/search?q=word%20cup&lr=en-US&num=10',
	headers: {
		'x-rapidapi-key': '2106f34345mshd698806d7345daep15f627jsnffde8ad7d379',
		'x-rapidapi-host': 'google-search72.p.rapidapi.com'
      },
    });

    const data = await res.json();

    setResults(data);
    setLoading(false);
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
