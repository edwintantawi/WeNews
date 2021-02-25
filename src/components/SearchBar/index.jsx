import React, { useState } from 'react';
// styled
import './index.scss';

// icon
import { close_icon } from 'assets';

const SearchBar = ({ handleChange }) => {
  const [close, setClose] = useState(false);

  const handleCloseButton = (e) => {
    const value = e.target.value;
    handleChange(value);
    value.length !== 0 ? setClose(true) : setClose(false);
  };

  return (
    <div className="search__bar">
      <div className="container">
        <div className="search__bar__contain">
          <input
            type="text"
            className="search__bar__contain__input"
            name="search"
            placeholder="search a topics..."
            onChange={(e) => handleCloseButton(e)}
          />
          <a href="/">
            <img
              src={close_icon}
              alt="search icon"
              className={`search__bar__contain__search ${
                close ? null : 'd-none'
              }`}
              style={{ cursor: 'pointer' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
