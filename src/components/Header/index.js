import React from 'react';
import PropTypes from 'prop-types';

import './index.css';


function Header(props) {
  return (
    <header className={`app-header ${props.className}`}>
      <a href={props.link}>{props.children}</a>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.string.isRequired,
};

Header.defaultProps = {
  className: '',
  link: '/',
};


export default Header;
