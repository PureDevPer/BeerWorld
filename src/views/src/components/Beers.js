import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styled from "styled-components";
import { beerImage, HeartEmpty, HeartFull } from "../assets/images";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
  height: inherit;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const BeersTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Image = styled.img`
  height: 150px;
  width: 100%;
  max-width: 100px;
  margin-left: 15px;
  border-radius: 10px;
  box-shadow: 5px 10px 18px #888888;
  position: relative;
  top: -25px;
`;

const BeersTopDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  text-align: center;
`;

const Header = styled.p`
  margin-top: 15px;
  &:first-child {
    font-size: 18x;
    font-weight: 600;
  }
  &:nth-child(2) {
    margin-top: 10px;
    font-size: 16px;
    text-transform: uppercase;
    color: #535c68;
  }
  &:last-child {
    margin-top: 5px;
  }
`;

const Description = styled.div`
  padding: 20px;
  text-align: justify;
  letter-spacing: 2px;
  font-size: 16px;
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

class Beers extends Component {
  state = {
    isFavorite: false
  };

  handleClick = () => {
    const { isFavorite } = this.state;
    const { id, picture, name, abv, description } = this.props;
    axios.post("http://localhost:5000/data", {
      id,
      picture,
      name,
      abv,
      description,
      isFavorite: !isFavorite
    });
    this.setState({ isFavorite: !isFavorite });
  };

  async componentDidMount() {
    const { data } = await axios.get("http://localhost:5000/beers");
    const { id } = this.props;
    data.forEach(beer => {
      if (id === beer.id) this.setState({ isFavorite: beer.isFavorite });
    });
  }

  render() {
    const { isFavorite } = this.state;
    const { name, picture, description, abv } = this.props;

    return (
      <Container>
        <BeersTop>
          <>
            {picture ? (
              <Image src={picture} alt={name} title={name} />
            ) : (
              <Image src={beerImage} alt={name} title={name} />
            )}
          </>
          <BeersTopDetails>
            <Header>{name}</Header>
            {abv ? <Header>Abv: {abv}</Header> : <Header></Header>}
            <Header>
              <Button onClick={this.handleClick}>
                {isFavorite ? <HeartFull /> : <HeartEmpty />}
              </Button>
            </Header>
          </BeersTopDetails>
        </BeersTop>
        {description ? (
          <Description>{description.slice(0, 120)} ...</Description>
        ) : (
          <Description></Description>
        )}
      </Container>
    );
  }
}

Beers.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  description: PropTypes.string,
  abv: PropTypes.string
};

export default Beers;
