import React from 'react';
import { logo_white } from 'assets';
import './App.scss';
import Navbar from 'components/Navbar';
import SearchBar from 'components/SearchBar';
import Cards from 'components/Cards';

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
        <SearchBar />
      </header>
      <main>
        <Cards />
      </main>
      <footer>{/*  */}</footer>
    </div>
  );
};

export default App;
