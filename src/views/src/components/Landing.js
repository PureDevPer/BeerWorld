import React, { Component } from "react";
import axios from "axios";
import Beers from "./Beers";
import Loading from "./Loading";
import PropTypes from "prop-types";
import styled from "styled-components";
import { beerImage } from "../assets/images";

const Container = styled.div`
  height: 100%;
  margin-bottom: 50px;
`;

const BeersContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 0px 50px;
`;

class Landing extends Component {
  state = {
    beers: [],
    isLoading: true
  };

  async componentDidMount() {
    const { getBeerURL } = this.props;
    const { data } = await axios.get(`http://localhost:5000/${getBeerURL}`);
    this.setState({ beers: data, isLoading: false });
  }

  render() {
    const { isLoading, beers } = this.state;

    return (
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <BeersContainer>
            {beers.map(beer =>
              beer.labels ? (
                <Beers
                  key={beer.id}
                  id={beer.id}
                  name={beer.name}
                  picture={beer.labels.medium}
                  description={beer.description}
                  abv={beer.abv}
                />
              ) : (
                <Beers
                  key={beer.id}
                  id={beer.id}
                  name={beer.name}
                  picture={beerImage}
                  description={beer.description}
                  abv={beer.abv}
                />
              )
            )}
          </BeersContainer>
        )}
      </Container>
    );
  }
}

Landing.propTypes = {
  getBeerURL: PropTypes.string.isRequired
};

export default Landing;
