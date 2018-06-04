import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Table } from 'react-bootstrap';

import Slider from './Slider';
import Profile from './Profile';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentTab : 'profile'
		}
	}
  render() {
		return (
			<div>
				<Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Github Profile</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={() => this.setState({currentTab: 'slider'})}>Slider</NavItem>
						<NavItem eventKey={1} href="#" onClick={() => this.setState({currentTab: 'profile'})}>Profile</NavItem>
          </Nav>
        </Navbar>

				<div className="container">
					{ this.state.currentTab === 'slider' ? <Slider /> : false }
					{ this.state.currentTab === 'profile' ? <Profile /> : false }
					
				</div>
			</div>
		);
	}
}

export default App;