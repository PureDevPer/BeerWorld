import React, { Component } from "react";
import axios from "axios";
import Beers from "./Beers";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
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
  grid-auto-rows: 1fr;
  padding: 0px 50px;
`;

const Scroll = styled(InfiniteScroll)`
  border-radius: 10px;
  height: inherit;
`;

class Landing extends Component {
  state = {
    beers: [],
    isLoading: true,
    pageNumber: 1,
    hasMore: true
  };

  async componentDidMount() {
    const { pageNumber } = this.state;
    const { data } = await axios.get(
      `http://localhost:5000/data/${pageNumber}`
    );

    this.setState({
      beers: data,
      isLoading: false,
      pageNumber: pageNumber + 1
    });
  }

  fetchMoreData = async () => {
    const { pageNumber, beers } = this.state;
    if (pageNumber > 23) {
      this.setState({ hasMore: false });
      return;
    }

    const { data } = await axios.get(
      `http://localhost:5000/data/${pageNumber}`
    );
    this.setState({
      beers: beers.concat(data),
      pageNumber: pageNumber + 1
    });
  };

  render() {
    const { isLoading, beers, hasMore } = this.state;
    // console.log(favorite);
    return (
      <Container>
        {isLoading ? (
          <Loading />
        ) : (
          <BeersContainer>
            {beers.map(beer =>
              beer.labels ? (
                <Scroll
                  key={beer.id}
                  id={beer.id}
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
                <Scroll
                  key={beer.id}
                  id={beer.id}
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
              )
            )}
          </BeersContainer>
        )}
      </Container>
    );
  }
}

export default Landing;
