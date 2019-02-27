import React, { Component } from "react";
import Article from "./Article";
import { newsData } from "../data";
import { NewsConsumer } from "../context";

class List extends Component {
  state = {
    news: newsData
  };

  render() {
    return (
      <NewsConsumer>
        {value => {
          return value.news.map(article => {
            return <Article key={article.id} article={article} />;
          });
        }}
      </NewsConsumer>
    );
  }
}

export default List;
