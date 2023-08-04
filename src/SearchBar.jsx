import React, { useState } from 'react';

const SearchBar = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);

    const newFilteredResults = items.filter((item) =>
      item.title !== null && item.title.includes(searchText)
    );

    setFilteredResults(newFilteredResults);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFilteredResults = items.filter((item) =>
      item.title !== null && item.title.includes(searchTerm)
    );
    setFilteredResults(newFilteredResults);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
        />
        <input type="submit" value="Search" />
      </form>
      <ul>
        {filteredResults.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;



