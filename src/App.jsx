import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ReactBootStrap.Container fluid>
        <Navbar />
      </ReactBootStrap.Container>
    );
  }
}

export default App;