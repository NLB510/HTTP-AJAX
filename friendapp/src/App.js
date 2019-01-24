import React, { Component } from "react";
import { Route } from "react-router-dom";

import FriendsList from "./components/Friends/FriendsList";
import FriendForm from "./components/FriendForm/FriendForm"

import axios from "axios";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friendsData: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <FriendsList {...props} friendsData={this.state.friendsData} /> } />
        <Route path="/form" render={props => <FriendForm {...props} /> } />
      </div>
    );
  }
}

export default App;
