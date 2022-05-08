import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Alert, Form } from "@awsui/components-react";
import Button from "@awsui/components-react/button";
class HelloC extends React.Component {
  render() {
    return <Button>Submit</Button>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloC />
      <Alert name='hhh'/>
      <Form/>
    </div>
  );
}

export default App;
