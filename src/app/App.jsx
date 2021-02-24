import React, { useState } from 'react';
import './App.scss';
import Navbar from 'components/Navbar';
import SearchBar from 'components/SearchBar';
import Cards from 'components/Cards';
import Pagination from 'components/Pagination';
import Category from 'components/Category';

const App = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('technology');

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

  const handleCategory = (e) => {
    setCategory(e.target.dataset.category);
    setPage(1);
  };

  return (
    <div className="App">
      <header>
        <Navbar />
        <SearchBar />
        <Category handleClick={(e) => handleCategory(e)} />
      </header>
      <main>
        <Cards page={page} category={category} />
        <Pagination page={page} handleClick={(e) => handleChange(e)} />
      </main>
      <footer>{/*  */}</footer>
    </div>
  );
};

export default App;
