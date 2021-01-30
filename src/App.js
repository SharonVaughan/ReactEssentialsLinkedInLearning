import './App.css';

function SecretComponent() {
  return <h1>Secret information for authorised users only</h1>
}

function RegularComponent() {
  return <h1>Everyone can see this component</h1>
}

function App(props) {
  return (
    <>
      {props.authorised ? <SecretComponent /> : <RegularComponent />}
    </>
  )
  // if(props.authorised) {
  //   return <SecretComponent />
  // } else {
  //   return <RegularComponent />
  // }
}

export default App;
