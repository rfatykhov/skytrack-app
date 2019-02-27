import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NewsConsumer } from "../context";
import styled from 'styled-components';


class Article extends Component {
  render() {
    const { id, title, img} = this.props.article;
    return (
        <Wrapper>
          <NewsConsumer>
            {value => {
              return (
                <div onClick={() => value.handleDetail(id)}>
                  <Link to="/details">
                    <Image src={img} alt=""/>
                  </Link>
                </div>
              );
            }}
          </NewsConsumer>
            <Title>{title}</Title>
        </Wrapper>
    );
  }
}

export default Article;


const Wrapper = styled.div`
display: flex;
`

const Title = styled.div`
 font-size: 20px;
`

const Image = styled.img`
width: 300px;
`