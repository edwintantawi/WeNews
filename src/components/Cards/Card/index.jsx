import React from 'react';

// styled
import './index.scss';

const Card = ({ data }) => {
  // handle author
  if (data.author !== null) {
    if (data.author.search(/(https:)|(http:)/i) === 0) {
      const endurl = data.author.split('/');
      data.author = endurl[endurl.length - 1];
    }
  } else {
    data.author = '-';
  }

  data.publishedAt = new Date(data.publishedAt).toUTCString();

  return (
    <a className="news__card" href={data.url}>
      <div className="div">
        <div className="wrap">
          <div
            className="news__card__head"
            style={{ backgroundImage: `url(${data.urlToImage})` }}
          ></div>
          <div className="text">
            <div className="news__source">{data.source.name}</div>
            <h3 className="news__title">{data.title}</h3>
          </div>
        </div>
        <div className="news__card__body">
          <p>{data.description}</p>
        </div>
      </div>
      <div>
        <span className="author">author : {data.author}</span>
        <hr className="sp-bold" />
        <div className="news__card__footer text-right">
          <span className="time">{data.publishedAt}</span>
        </div>
      </div>
    </a>
  );
};

export default Card;
