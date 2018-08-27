import React, { Component } from 'react';
import { getFriend, updateFriend } from '../API';
import FriendForm from './FriendForm';


class EditFriend extends Component {
  state = {
    isLoading: true,
    friend: {},
    isEditing: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getFriend(id)
      .then(friend => {
        setTimeout(() => {
          this.setState({
            friend,
            isLoading: false
          })
        }, 600);
      });
  }

  updateFriend = (friend) => {
    this.setState({
      isEditing: true
    });
    updateFriend(friend.id, friend)
    .then(() => {
      setTimeout(() => {
        this.props.history.push(`/friends/${friend.id}`);
      }, 600);
    });
  }
  render() {
    return this.state.isLoading ?
    <h2>Loading...</h2> :
    this.state.isEditing ?
    <h2>Editing...</h2> :
    <FriendForm onFormSubmitted={this.updateFriend} friend={this.state.friend}/>
  }
}

export default EditFriend;