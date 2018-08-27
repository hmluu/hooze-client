import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import FriendForm from './FriendForm';
import {createFriend} from '../API';

class AddFriend extends Component {
  state = {
    friend: {
      name: '',
      relation: ''
    },
    adding: false 
  };

  createFriend = (friend) => {
    this.setState({
      adding: true
    });
    createFriend(friend)
    .then(result => {
      this.props.history.push(`/friends/${result.id}`);
    })
  }

  render() {
    return (
      <div>
        <FriendForm onFormSubmitted={this.createFriend} friend={this.state.friend} />
      </div>
    )
  }
}

export default withRouter(AddFriend);