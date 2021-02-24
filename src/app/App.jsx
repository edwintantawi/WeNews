import React, { useState } from 'react';
import './App.scss';
import Navbar from 'components/Navbar';
import SearchBar from 'components/SearchBar';
import Cards from 'components/Cards';
import Pagination from 'components/Pagination';

const App = () => {
  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    const button = e.target.name;

    if (button === 'next' && page < 5) {
      setPage(page + 1);
    } else if (button === 'prev' && page > 1) {
      setPage(page - 1);
    } else if (button !== 'next' && button !== 'prev') {
      setPage(parseInt(button));
    }
  };

  return (
    <div className="App">
      <header>
        <Navbar />
        <SearchBar />
      </header>
      <main>
        <Cards page={page} />
        <Pagination page={page} handleClick={(e) => handleChange(e)} />
      </main>
      <footer>{/*  */}</footer>
    </div>
  );
};

export default App;
