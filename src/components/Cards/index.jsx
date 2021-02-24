import React from 'react';
import Card from './Card';

// styled
import './index.scss';

const Cards = () => {
  return (
    <section className="news__list">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">News for you</h2>
            <div className="grid">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
