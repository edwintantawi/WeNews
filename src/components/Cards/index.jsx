import Loader from 'components/Loader';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Alert from 'components/Alerts';
import './index.scss';
const axios = require('axios').default;

// styled

const Cards = ({ page, category }) => {
  const API_KEY = '99b04cf0565a42959a298cd8a4a185ef';
  // const API_KEY = '72b3366bd3f242e8908da91567f9fc05';
  const API_ENDPOINT = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=${category}&page=${page}`;

  const [datas, setDatas] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setDatas('');
    setLoading(true);
    setError(false);
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
  }, [API_ENDPOINT, page, category]);

  return (
    <section className="news__list">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-3">
              News for you {category !== 'technology' ? `- ${category}` : ''}
            </h2>
            <div className="text-center">{loading ? <Loader /> : null}</div>
            {error ? (
              <Alert
                type="danger"
                message="oops, something went wrong"
                action="refresh page"
              />
            ) : null}
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
