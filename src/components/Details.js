import React, { Component } from "react";
import { NewsConsumer } from "../context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Comments from "./Comments";
import Button from "./Button";

class Details extends Component {
  handleClick() {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <NewsConsumer>
        {value => {
          const { img, info, title } = value.detailedNews;
          return (
            <>
              <h2>{title}</h2>
              <Image src={img} alt="" />
              <p>{info}</p>
              <Link to="/">
                <Button>Вернуться ко всем новостям</Button>
              </Link>
              <Comments />
            </>
          );
        }}
      </NewsConsumer>
    );
  }
}

export default Details;

const Image = styled.img`
  width: 600px;
`;
