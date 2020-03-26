import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Title from "../components/Title";
import Favorite from "../components/Beers";

const Container = styled.div`
  height: 100%;
  margin-bottom: 50px;
`;

const BeersContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  padding: 0px 50px;
`;

class Favorites extends Component {
  state = {
    beers: []
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:5000/beers");
    this.setState({ beers: data });
  }

  render() {
    const { beers } = this.state;

    return (
      <>
        <Title text="Favorite Beer" />
        <Container>
          <BeersContainer>
            {beers.map(beer => (
              <Favorite
                key={beer.id}
                id={beer.id}
                name={beer.name}
                picture={beer.picture}
                description={beer.description}
                abv={beer.abv}
              />
            ))}
          </BeersContainer>
        </Container>
      </>
    );
  }
}

export default Favorites;
