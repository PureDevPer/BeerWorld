import React, { Component } from "react";
import axios from "axios";
import Beers from "./Beers";
import InfiniteScroll from "react-infinite-scroll-component";
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
  height: 100%;
  display: grid;
  grid-gap: 50px;
  grid-row-gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 0px 50px;
`;

const Scroll = styled(InfiniteScroll)`
  border-radius: 10px;
  height: justify;
`;

class Landing extends Component {
  state = {
    beers: [],
    isLoading: true,
    pageNumber: 1,
    hasMore: true,
    isHome: true
  };

  async componentDidMount() {
    const { getBeerURL } = this.props;
    const { pageNumber } = this.state;

    if (getBeerURL === "data") {
      const { data } = await axios.get(
        `http://localhost:5000/${getBeerURL}/${pageNumber}`
      );
      this.setState({
        beers: data,
        isLoading: false,
        pageNumber: pageNumber + 1,
        isHome: true
      });
    } else {
      const { data } = await axios.get(`http://localhost:5000/${getBeerURL}`);
      this.setState({
        beers: data,
        isLoading: false,
        isHome: false
      });
    }
  }

  fetchMoreData = async () => {
    const { pageNumber, beers } = this.state;
    const { getBeerURL } = this.props;
    if (pageNumber > 23) {
      this.setState({ hasMore: false });
      return;
    }

    if (getBeerURL === "data") {
      const { data } = await axios.get(
        `http://localhost:5000/${getBeerURL}/${pageNumber}`
      );
      this.setState({
        beers: beers.concat(data),
        pageNumber: pageNumber + 1
      });
    }
  };

  render() {
    const { isLoading, beers, hasMore, isHome } = this.state;

    return (
      <Container id="Container">
        {isLoading ? (
          <Loading />
        ) : (
          <BeersContainer>
            {beers.map(beer =>
              beer.labels ? (
                isHome ? (
                  <Scroll
                    dataLength={50}
                    next={this.fetchMoreData}
                    hasMore={hasMore}
                  >
                    <Beers
                      key={beer.id}
                      id={beer.id}
                      name={beer.name}
                      picture={beer.labels.medium}
                      description={beer.description}
                      abv={beer.abv}
                    />
                  </Scroll>
                ) : (
                  <Beers
                    key={beer.id}
                    id={beer.id}
                    name={beer.name}
                    picture={beer.labels.medium}
                    description={beer.description}
                    abv={beer.abv}
                  />
                )
              ) : isHome ? (
                <Scroll
                  dataLength={50}
                  next={this.fetchMoreData}
                  hasMore={hasMore}
                >
                  <Beers
                    key={beer.id}
                    id={beer.id}
                    name={beer.name}
                    picture={beerImage}
                    description={beer.description}
                    abv={beer.abv}
                  />
                </Scroll>
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
