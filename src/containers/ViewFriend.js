import React, { Component } from 'react';
import Friend from '../components/Friend';
import { getFriend } from '../API'


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
  render() {
    return (
      this.state.isLoading ?
      <h2>Finding Info ... </h2> :
      <Friend friend={this.state.friend} cols="col-12" showRelation={true} showEdit={true}/>
    )
  }
}

export default ViewFriend;