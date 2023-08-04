<<<<<<< HEAD
import { useState } from 'react'
import "normalize.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
    <body>
    <div className="header-container">
      <header className="sticky-header">
        <div className="logo">Your Logo</div>
        <div className="search-bar-container">
          <input type="text" placeholder="Search by title, url or author" />
          <button type="submit">Search</button>
        </div>
      </header>
    </div>

    
    </body>
=======
      
>>>>>>> 09067ea06d3ca2330620bea536b7f4ec14326683
    </>
  )
}

export default App
=======

import React, { useState, useEffect } from 'react';
import './App.css'

function FetchDataComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://hn.algolia.com/api/v1/search');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {data.hits.map(item => (
            <div key={item.objectID}>
              <h1>{item.title}</h1>
              <h2>Author: {item.author}</h2>
              <a href={item.url} target = "_blank">Link</a>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <FetchDataComponent />
    </div>
  );
}

export default App;
>>>>>>> c4e1f8d75e51d4de53d5b58e7319ce49fb8db96f
