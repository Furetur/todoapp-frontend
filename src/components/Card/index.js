import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


function Card(props) {
  if (!props.title) {
    return (
      <div className="card">
        <div className="card-content">
          {props.children}
        </div>
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{props.title}</h2>
      </div>
      <div className="card-content">
        {props.children}
      </div>
    </div>
  );
}


Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Card.defaultProps = {
  title: '',
};


export default Card;
