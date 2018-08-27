import React, { Component } from 'react';
import Friend from '../components/Friend';
import { getAllFriends } from '../API';

class Friends extends Component {
  state = {
    isLoading: true,
    friends: []
  };

  componentDidMount(){
    getAllFriends()
      .then(friends => {
        setTimeout(() => {
          this.setState({
            isLoading: false,
            friends
          });
        }, 600);
      });
  }

  render() {
    return (
      <div>
      {this.state.isLoading ? 
        <h2>Looking for friends...</h2> : 
        this.state.friends.map(friend => (
        <Friend key={friend.id} friend={friend} cols="col-6"/>
        ))
        
      }
      </div>
    )
  }
}

export default Friends;