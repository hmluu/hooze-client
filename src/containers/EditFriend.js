import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import { getFriend, updateFriend } from '../API';
import FriendForm from './FriendForm';


class EditFriend extends Component {
  state = {
    isLoading: true,
    friend: {},
    isEditing: true
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
    updateFriend(friend.id, friend)
    .then(() => {
      this.props.history.push(`/friends/${friend.id}`);
    });
  }
  render() {
    return this.state.isLoading ?
    <h2>Loading...</h2> :
    <FriendForm onFormSubmitted={this.updateFriend} friend={this.state.friend}/>
  }
}

export default EditFriend;