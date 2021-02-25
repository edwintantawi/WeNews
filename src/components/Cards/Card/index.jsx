import React from 'react';

// styled
import './index.scss';

// image
import { no_image } from 'assets';

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

  data.urlToImage = data.urlToImage ?? no_image;
  data.publishedAt = new Date(data.publishedAt).toUTCString();

  return (
    <a className="news__card" href={data.url}>
      <div className="div">
        <div className="wrap">
          <img
            src={data.urlToImage}
            alt={data.author}
            className="news__card__head"
            loading="lazy"
          />
          <div className="shadow"></div>
          <div className="text">
            <div className="news__source">{data.source.name}</div>
            <h3 className="news__title">{data.title}</h3>
          </div>
        </div>
        <div className="news__card__body">
          <p>{data.description}</p>
        </div>
      </div>
      <div className="text-right">
        <span className="time">{data.publishedAt}</span>
        <hr className="sp-bold" />
        <div className="news__card__footer text-left">
          <span className="author">
            <b>author</b> : {data.author}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
