import React, { Component } from "react";
import { Route } from "react-router-dom";

import FriendsList from "./components/Friends/FriendsList";
import FriendForm from "./components/FriendForm/FriendForm";
import NavBar from "./components/NavBar/NavBar";

import axios from "axios";

import "./App.css";

const baseUrl = "http://localhost:5000";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: [],
      friend: {
        name: "",
        age: "",
        email: ""
      },
      
    };
  }

  componentDidMount() {
    axios
      .get(`${baseUrl}/friends`)
      .then(res => this.setState({ friendsData: res.data }))
      .catch(err => console.log(err));
  }

  handleChanges = e => {
    const { name, value } = e.target;
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [name]: value
        }
      };
    });
  };


  addFriend = e => {
    e.preventDefault();

    axios.post(`${baseUrl}/friends`, this.state.friend)
    .then(res => {
      this.setState({
        friendsData: res.data
      })
      this.props.history.push('/')
    })
    .catch(err => console.log(err))
  }

  deleteFriend = (e, friendId) => {
    e.preventDefault();

    axios.delete(`${baseUrl}/friends/${friendId}`)
    .then(res => {
      console.log(res)
      this.setState({
        friendsData: res.data
      })
    })
    .catch(err => console.log(err))

  }

  updateFriend = e => {

  }




  render() {
    console.log(this.state.friend)
    return (
      <div className="App">
        <NavBar />
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friendsData={this.state.friendsData} deleteFriend={this.deleteFriend} />
          )}
        />
        <Route
          path="/friend-form"
          render={props => (
            <FriendForm
              {...props}
              friend={this.state.friend}
              handleChanges={this.handleChanges}
              addFriend={this.addFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
