import React, { Component } from "react";
import { Route } from "react-router-dom";

import FriendsList from "./components/Friends/FriendsList";
import FriendForm from "./components/FriendForm/FriendForm";
import NavBar from "./components/NavBar/NavBar";

import axios from "axios";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => this.setState({ friendsData: res.data }))
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    const { name, value } = e.target;

    this.setState(prevState => {
      return {
        friend: {
          ...prevState.item,
          [name]: value
        }
      };
    });
  };

  render() {
    console.log(this.state.friend)
    return (
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friendsData={this.state.friendsData} />
          )}
        />
        <Route
          path="/friend-form"
          render={props => (
            <FriendForm
              {...props}
              friend={this.state.friend}
              handleChanges={this.handleChanges}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
