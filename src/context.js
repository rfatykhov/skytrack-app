import React, { Component } from "react";
import { newsData, detailedNews } from "./data";
const NewsContext = React.createContext();

class NewsProvider extends Component {
  state = {
    news: [],
    detailedNews: detailedNews,
  };

  componentDidMount() {
    this.setNews();
  }

  setNews = () => {
    let news = [];
    newsData.forEach(item => {
      const singleItem = { ...item };
      news = [...news, singleItem];
    });
    this.setState(() => {
      return { news };
    });
  };

  getArticle = id => {
    const article = this.state.news.find(item => item.id === id);
    return article;
  };

  handleDetail = id => {
    const article = this.getArticle(id);
    this.setState(() => {
      return { detailedNews: article };
    });
  };

  render() {
    return (
      <NewsContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
        }}
      >
        {this.props.children}
      </NewsContext.Provider>
    );
  }
}

const NewsConsumer = NewsContext.Consumer;

export { NewsProvider, NewsConsumer };
