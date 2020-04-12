import React from 'react';

function Header(props) {
  return (
  <div className="head-bar">
  <h1 className="head-title">Notes</h1>
  <h1 className="head-name">{props.name}</h1>
  </div> )
};
export default Header;
