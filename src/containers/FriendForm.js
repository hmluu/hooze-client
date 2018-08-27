import React, {Component} from 'react';
// import Friend from '../components/Friend';

class FriendForm extends Component {
  state = {
    friend: {
      name: '',
      relation: ''
   }
  };

  componentDidMount() {
    this.setState({
      friend: {
      ...this.props.friend
      }
    })
  }

  valueChanged = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      friend: {
        ...prevState.friend,
        [name]: value
      }
    }))
  }
  validFriend = () => {
    const { friend } = this.state;
    const hasName = typeof friend.name === 'string' && friend.name.trim() !== '';
    const hasRelation = typeof friend.relation === 'string' && friend.relation.trim() !== '';
    console.log(hasName);
    console.log(hasRelation);
    
    
    return hasName && hasRelation;
  };

  formSubmitted = (event) => {
    console.log(event);
    
    event.preventDefault();
    if (this.validFriend()) {
      this.props.onFormSubmitted(this.state.friend);
    }
  };

  render() {
    const { friend } = this.state;
    return (
      <div className="row">
        <form onSubmit={this.formSubmitted} className="col-6">
          <h1>Friend Form</h1>
          <div className="form-group">
            <label htmlFor="exampleName">Name</label>
            <input onChange={this.valueChanged} value={friend.name} type="text" className="form-control" name="name" id="name" aria-describedby="nameHelp" placeholder="Enter Name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleRelation">Relation</label>
            <input onChange={this.valueChanged} value={friend.relation} type="text" className="form-control" name="relation" id="relation" placeholder="Relation" required/>
          </div>
          <button type="submit" className="btn btn-outline-success">Submit</button>
        </form>
      </div>
    )
  }
}

export default FriendForm;