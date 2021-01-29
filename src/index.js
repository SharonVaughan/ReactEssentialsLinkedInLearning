import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  // What we want to create, Where we want it displayed
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Monday"),
    React.createElement("li", null, "Tuesday"),
    React.createElement("li", null, "Wednesday"),
    React.createElement("li", null, "Thursday"),
    React.createElement("li", null, "Friday"),
    React.createElement("li", null, "Saturday"),
    React.createElement("li", null, "Sunday")
  ),
  document.getElementById('root')
);
