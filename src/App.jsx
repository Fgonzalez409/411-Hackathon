import { useState } from 'react'
import "normalize.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
  )
}

export default App
