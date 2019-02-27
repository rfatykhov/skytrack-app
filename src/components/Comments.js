import React, { Component } from "react";
import Button from "./Button";
import styled from "styled-components";

class Comments extends Component {
  state = {
    items: [],
    clicked: false
  };
  componentDidMount() {
    fetch(`http://jsonplaceholder.typicode.com/posts`)
      .then(res => res.json())
      .then(data => this.setState({ items: data }));
  }

  displayComments = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {
    const { items } = this.state;
    return (
      <>
        <Button onClick={() => this.displayComments()}>
          Показать комментарии
        </Button>

        {this.state.clicked ? (
          <div>
            {items.map(item => (
              <div key={item.title}>{item.title}</div>
            ))}
          </div>
        ) : null}
      </>
    );
  }
}

export default Comments;
