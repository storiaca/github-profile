import React, { Component } from 'react';

import { FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';

import { redBorder } from '../style.css';

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: this.props.profile,
			editing: false,
			error: false
		}
	}
	componentDidMount() {
		this.props.fetchProfile();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			userInfo: nextProps.profile
		})
	}

	updateValue(type, event) {
		const userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
		userInfoCopy[type] = event.target.value;
		this.setState({
			userInfo: userInfoCopy
		})
	}

	saveProfile() {
		let error = false;
		const propertiesToCheck = ['name', 'bio', 'location', 'company'];

		for(let term of propertiesToCheck) {
			if(this.state.userInfo[term] === '') {
				error = true;
			}
		}

		if(!error) {
			this.props.saveProfile(this.state.userInfo);
		}
		this.setState({
			error
		});
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
							className={this.state.error&&this.state.userInfo.name === '' ? redBorder : ''}
							value={this.state.userInfo.name}
							placeholder="Enter text"
							onChange={this.updateValue.bind(this, 'name')}
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Bio</ControlLabel>
						<FormControl
							type="text"
							className={this.state.error && this.state.userInfo.bio === '' ? redBorder : ''}
							value={this.state.userInfo.bio}
							placeholder="Enter text"
							onChange={this.updateValue.bind(this, 'bio')}
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Location</ControlLabel>
						<FormControl
							type="text"
							className={this.state.error && this.state.userInfo.location === '' ? redBorder : ''}
							value={this.state.userInfo.location}
							placeholder="Enter loation"
							onChange={this.updateValue.bind(this, 'location')}
						/>
					</FormGroup>
					<FormGroup>
						<ControlLabel>Company</ControlLabel>
						<FormControl
							type="text"
							className={this.state.error && this.state.userInfo.company === '' ? redBorder : ''}
							value={this.state.userInfo.company}
							placeholder="Enter text"
							onChange={this.updateValue.bind(this, 'company')}
						/>
					</FormGroup>
					<Button bsStyle="info" onClick={this.saveProfile.bind(this)}>Save</Button>
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