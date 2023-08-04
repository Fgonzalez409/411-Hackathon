
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
