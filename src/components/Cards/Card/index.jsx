import React from 'react';

// styled
import './index.scss';

const Card = () => {
  return (
    <div className="news__card">
      <div className="wrap">
        <div className="news__card__head"></div>
        <div className="text">
          <div className="news__source">BBC News</div>
          <h3 className="news__title">
            Michelle Obama to star in Netflix children's show Waffles + Mochi
          </h3>
        </div>
      </div>
      <div className="news__card__body">
        <p>
          The former US first lady will play a supermarket owner alongside
          puppets named Waffles and Mochi.
        </p>
        <hr className="sp-bold" />
      </div>
      <div className="news__card__footer">
        <span className="author">author : Catie Keck</span>
        <span className="time">10:08:11 | 2021-02-09</span>
      </div>
    </div>
  );
};

export default Card;
