import React from 'react';
import propTypes from 'prop-types';

const Alert = ({ type, message, action }) => {
  return (
    <div
      className={`alert alert-${type} d-flex justify-content-between`}
      role="alert"
      style={{ fontSize: 14, flexWrap: 'wrap' }}
    >
      {message}
      <a href="/" className="alert-link mt-3 mt-md-0">
        {action}
      </a>
    </div>
  );
};

Alert.propTypes = {
  type: propTypes.string,
  message: propTypes.string,
  action: propTypes.string,
};

export default Alert;
