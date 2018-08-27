import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Friend from '../components/Friend';
import { getFriend, deleteFriend } from '../API'


class ViewFriend extends Component {
  state = {
    isLoading: true,
    friend: {}
  }

  componentDidMount(){
    const {id} = this.props.match.params;
    getFriend(id)
      .then(friend => {
        setTimeout(() => {
          this.setState({
            isLoading: false,
            friend
          });
        }, 600);
      })
  }

  deleteFriend = () => {
    deleteFriend(this.state.friend.id)
      .then(() => {
        this.props.history.push('/friends');
      });
  }
  render() {
    return (
      this.state.isLoading ?
      <h2>... </h2> :
      <Friend deleteFriend={this.deleteFriend} friend={this.state.friend} cols="col-12" showRelation={true} editing={true}/>
    )
  }
}

export default withRouter(ViewFriend);