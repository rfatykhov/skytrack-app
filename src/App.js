import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import List from "./components/List";
import Details from "./components/Details";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/details" component={Details} />
        </Switch>
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`;
