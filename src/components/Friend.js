import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend, cols, showRelation, editing, deleteFriend }) => (
  <div className="row">
          <div className={`card ${cols}`}>
            <div className="card-body">
            {
              showRelation ?
              <h5 className="card-title">{friend.name} - {friend.relation}</h5> :
              <h5 className="card-title">{friend.name}</h5>
            }
              <img alt={friend.name} src="https://www.freeiconspng.com/uploads/drake-face-png-7.png" />
            </div>
            {
              editing ? 
              <div>
              <Link to={`/friends/${friend.id}/edit`} className="btn btn-outline-warning btn-sm">Edit Info</Link> 
              <button onClick={deleteFriend} className="btn btn-outline-danger btn-sm">Delete</button> 
              </div> :
              <Link to={`/friends/${friend.id}`} className="btn btn-outline-success btn-sm">View Info</Link>
            }
          </div>
        </div>
);

export default Friend;



