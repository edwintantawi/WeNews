import React from 'react';
import propTypes from 'prop-types';

// styled
import './index.scss';

const Pagination = ({ page, handleClick }) => {
  return (
    <div className="pagination">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button
              className={`action ${page === 1 ? 'disabled' : null}`}
              name="prev"
              onClick={(e) => handleClick(e)}
            >
              prev
            </button>

            <button
              name="1"
              className={page === 1 ? 'active' : null}
              onClick={(e) => handleClick(e)}
            >
              1
            </button>
            <button
              name="2"
              className={page === 2 ? 'active' : null}
              onClick={(e) => handleClick(e)}
            >
              2
            </button>
            <button
              name="3"
              className={page === 3 ? 'active' : null}
              onClick={(e) => handleClick(e)}
            >
              3
            </button>
            <button
              name="4"
              className={page === 4 ? 'active' : null}
              onClick={(e) => handleClick(e)}
            >
              4
            </button>
            <button
              name="5"
              className={page === 5 ? 'active' : null}
              onClick={(e) => handleClick(e)}
            >
              5
            </button>

            <button
              className={`action ${page === 5 ? 'disabled' : null}`}
              name="next"
              onClick={(e) => handleClick(e)}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  page: propTypes.number,
  handleClick: propTypes.func,
};

export default Pagination;
