import React, { Component } from 'react';

import { FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: {},
			editing: false
		}
	}
	componentDidMount() {
		
	}

	updateValue(type, event) {
		const userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
		userInfoCopy[type] = event.target.value;
		this.setState({
			userInfo: userInfoCopy
		})
	}
  render() {
		return (
			<div>
				<h1>Profile</h1>
				<Button bsStyle="primary" onClick={() => this.setState({editing : !this.state.editing})}>Edit</Button>
				<hr/>
				{this.state.editing ? 
					<form>
					<FormGroup>
						<ControlLabel>Name</ControlLabel>
						<FormControl
							type="text"
							value={this.state.userInfo.name}
							placeholder="Enter text"
							onChange={this.updateValue.bind(this, 'name')}
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Bio</ControlLabel>
						<FormControl
							type="text"
							value={this.state.userInfo.bio}
							placeholder="Enter text"
							onChange={this.updateValue.bind(this, 'bio')}
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Location</ControlLabel>
						<FormControl
							type="text"
							value={this.state.userInfo.location}
							placeholder="Enter loation"
							onChange={this.updateValue.bind(this, 'location')}
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Company</ControlLabel>
						<FormControl
							type="text"
							value={this.state.userInfo.company}
							placeholder="Enter text"
							onChange={this.updateValue.bind(this, 'company')}
						/>
					</FormGroup>
      	</form>
				:
				 <div>
					 <p><strong>Name:</strong> {this.state.userInfo.name}</p>
					 <p><strong>Bio:</strong> {this.state.userInfo.bio}</p>
					 <p><strong>Location:</strong> {this.state.userInfo.location}</p>
					 <p><strong>Company:</strong> {this.state.userInfo.company}</p>
				 </div>
				}
				
			</div>
		);
	}
}

export default Profile;