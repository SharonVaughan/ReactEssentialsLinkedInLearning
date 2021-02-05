import React, { useState, useEffect } from "react"
import './App.css';

// https://api.github.com/users/sharonvaughan

function App({ login }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .then(setData)
  }, [])

  if(data) {
    return (<div>
      <h1>{ data.name }</h1>
      <h4>{data.bio}</h4>
      <img src={data.avatar_url} alt={data.login}/>
    </div>)
  }

  return <div>No User Available</div>
}

export default App;
