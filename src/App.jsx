import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ReactBootStrap.Container fluid>
        <Navbar />
        <Footer />
      </ReactBootStrap.Container>
    );
  }
}

export default App;