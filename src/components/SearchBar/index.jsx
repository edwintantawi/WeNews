import React from 'react';
// styled
import './index.scss';

const SearchBar = () => {
  return (
    <div className="search__bar">
      <div className="container">
        <div className="search__bar__contain">
          <input
            type="text"
            className="search__bar__contain__input"
            name="search"
            placeholder="search a topics..."
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
