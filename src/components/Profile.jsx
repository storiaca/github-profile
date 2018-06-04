import React, { Component } from 'react';

class Profile extends Component {
	componentDidMount() {
		let header = new Headers({"Content-Type":"application/json", "Authorization":"token "});
		fetch('https://api.github.com/users/storiaca', {
			method: 'GET',
			headers: header
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
    .catch(error => console.log(error));
	}
  render() {
		return (
			<div>
				<h1>Profile</h1>
			</div>
		);
	}
}

export default Profile;