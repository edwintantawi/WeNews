import React from 'react';

const Loader = () => {
  return (
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
};

export default Loader;
