import React from 'react';

// style
const style = {
  fontSize: 14,
  flexWrap: 'wrap',
};

const Alert = ({ type, message, action }) => {
  return (
    <div
      className={`alert alert-${type} d-flex justify-content-between`}
      role="alert"
      style={style}
    >
      {message}
      <a href="/" className="alert-link mt-3 mt-md-0">
        {action}
      </a>
    </div>
  );
};

export default Alert;
