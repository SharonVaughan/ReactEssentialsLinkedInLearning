import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  // What we want to create, Where we want it displayed
  React.createElement("h1", { style: { color: "blue" } }, "Heyyyyyy Everyone!"),
  document.getElementById('root')
);
