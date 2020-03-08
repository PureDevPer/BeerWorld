import React, { Component } from "react";
import axios from "axios";
import { beerImage } from "../assets/images";

class App extends Component {
  state = {
    beers: [],
    isLoading: true
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:5000/data");
    this.setState({ beers: data, isLoading: false });
  }

  render() {
    const { isLoading, beers } = this.state;
    // console.log(beers);
    // beers.map(i => console.log(i));

    return (
      <>
        <h1>Hello</h1>
        <>{isLoading ? "Loading..." : <img src={beerImage} alt="" />}</>
        {/* <>{isLoading ? "Loading..." : beers.map(beer => <h1>{beer.id}</h1>)}</> */}
      </>
    );
  }
}

export default App;
