import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const checklist = ["boots", "tent", "headlamp"]
// console.log(checklist[1])
// => "tent"
// const [mostImportantItem] = ["boots", "tent", "headlamp"]
// console.log(mostImportantItem)
// => "boots"
// const [mostImportantItem, second] = ["boots", "tent", "headlamp"]
// console.log(mostImportantItem, second)
// => "boots" "tent"
const [, , light] = ["boots", "tent", "headlamp"]
console.log(light)
// => "headlamp"

ReactDOM.render(
  <App authorised={false} />,
  document.getElementById('root')
);
