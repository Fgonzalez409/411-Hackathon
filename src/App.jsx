import { useState } from 'react'
import "normalize.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
        <header className="sticky-header">
          <div className="logo">Search Hacker News</div>
              <div className="search-bar-container">
                <input type="text" placeholder="Search stories by title, url or author" />
                <button type="submit"></button>
              </div>
        </header>
      
    </body>
      
    </>
  )
}

export default App
