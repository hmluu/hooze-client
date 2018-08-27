const API_URL = 'http://localhost:5000/api/v1/friends';

export function getAllFriends() {
  return fetch(API_URL) 
    .then(res => res.json());
}

export function getFriend(id) {
  return fetch(`${API_URL}/${id}`) 
    .then(res => res.json());
}

export function createFriend(friend) {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(friend),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json());
}

export function updateFriend(id, friend) {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(friend),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json());
}
