import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    beers: []
  };
  getBeers = async () => {
    const beers = await axios.get("http://localhost:5000/data");
    console.log(beers);
    this.setState({ beers });
  };
  render() {
    return <h1>Hello</h1>;
  }
}

export default App;
