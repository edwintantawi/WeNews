import React from 'react';
// styles
import './index.scss';

// images
import { logo_white } from 'assets';

const Navbar = () => {
  return (
    <nav>
      <div className="container text-center">
        <h1 className="d-none">WeNews, a news aggregator web apps</h1>
        <a href="/">
          <img src={logo_white} alt="WeNews" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
