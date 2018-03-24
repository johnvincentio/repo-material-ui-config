import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import { render } from 'react-dom';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';

import MenuBar from './MenuBar';

// import './assets/css/App.css';

// import About from './screens/About';
// import SomePage from './screens/SomePage';

// eslint-disable-next-line react/prefer-stateless-function
class Test1 extends Component {
	render() {
		console.log('Test1::render()');
		return (
			// <Router>
			<div>
				<MenuBar />
				<ul style={{ listStyle: 'none' }}>
					<li style={{ textDecoration: 'none' }}>
						<NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }}>
							<ListItem button>
								<ListItemText primary="Test" />
							</ListItem>
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" style={{ textDecoration: 'none', color: 'unset' }}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="/somepage" style={{ textDecoration: 'none', color: 'unset' }}>
							Topics
						</NavLink>
					</li>
				</ul>

				<hr />

				{/* <Route exact path="/" />
					<Route path="/about" component={About} />
					<Route path="/somepage" component={SomePage} /> */}
			</div>
			// </Router>
		);
	}
}

export default Test1;
