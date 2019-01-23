import React, { Component } from 'react';

import FriendsList from "./components/FriendsList"

import axios from "axios";

import './App.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsData: []
    }
    
  }


  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({friendsData: res.data}))
      .catch(err => console.log(err))
    
  }



  render() {

    return (
      <div className="App">
        <FriendsList friendsData={this.state.friendsData} />
      </div>
    );
  }
}

export default App;
