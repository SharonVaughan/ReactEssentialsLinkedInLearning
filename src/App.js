import React, { useState } from "react"
import './App.css';

function App() {
  // const what = useState()
  // console.log(what)
  // => [undefined, a_function]
  // const what = useState("happy")
  // console.log(what)
  // => ["happy", a_function]
  // const [emotion] = useState("happy")
  // console.log(emotion)
  // => happy
  const [emotion, setEmotion] = useState("happy")
  // console.log(emotion, setEmotion)
  // => happy ƒ dispatchAction(fiber, queue, action) {..}

  return (
    <>
      <h1>Current emotion is { emotion }.</h1>
      <button onClick={() => setEmotion("happy")}>
        Happy
      </button>
      <button onClick={() => setEmotion("frustrated")}>
        Frustrate
      </button>
      <button onClick={() => setEmotion("enthusiastic")}>
        Enthuse
      </button>
    </>
  )
}

export default App;
