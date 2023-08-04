import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "normalize.css"
import './App.css'

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
    <>
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
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
