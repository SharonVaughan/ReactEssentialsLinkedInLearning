// import React, { useState } from "react"
import React, { useReducer } from "react"
import './App.css';

function App() {
  // const [checked, setChecked] = useState(false)
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  )

  // this is a basic reducer function
  // takes in current state and returns a new state
  // better to useReducer
  // function toggle() {
  //   setChecked(checked => !checked)
  // }

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        // onChange={() => setChecked(checked => !checked)}
        onChange={toggle}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  )
}

export default App;
