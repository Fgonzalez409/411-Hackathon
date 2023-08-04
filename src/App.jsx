import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://hn.algolia.com/api/v1/search');
        const jsonData = await response.json();
        setData(jsonData.hits);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log('%c Here', 'color: orange', data);
  }, [data]);

  return (
    <div>
      <SearchBar items={data} />
      {data ? (
        <div>
          {data.map((item) => (
            <div key={item.objectID}>
              <h1>{item.title}</h1>
              <h2>Author: {item.author}</h2>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.url}
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
