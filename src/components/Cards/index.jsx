import React, { useState, useEffect } from 'react';
import Card from './Card';
import './index.scss';
const axios = require('axios').default;

// styled

const Cards = ({ page }) => {
  const API_KEY = '99b04cf0565a42959a298cd8a4a185ef';
  // 72b3366bd3f242e8908da91567f9fc05
  const API_ENDPOINT = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=technology&page=${page}`;

  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setDatas('');
    setLoading(true);
    axios
      .get(API_ENDPOINT)
      .then((response) => {
        setDatas(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [API_ENDPOINT, page]);

  const loader = (
    <div className="d-flex align-items-center justify-content-center">
      <div
        className="spinner-grow text-warning mr-2"
        style={{ width: '1em', height: '1em' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning mr-2" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div
        className="spinner-grow text-warning"
        style={{ width: '1em', height: '1em' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );

  const errorMessage = (
    <div
      className="alert alert-danger d-flex justify-content-between"
      role="alert"
    >
      oops, something went wrong,try to refresh the pages
      <a href="/" className="alert-link">
        refreshing page
      </a>
    </div>
  );
  return (
    <section className="news__list">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">News for you</h2>
            <div className="text-center">{loading ? loader : null}</div>
            {error ? errorMessage : null}
            <div className="grid">
              {datas
                ? datas.map((data, idx) => {
                    return <Card key={idx} data={data} />;
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
