import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

// import DevTools from './DevTools';

import App from '../components/App';

import MainClasses from '../components/classes/Main';
import MainClassnames from '../components/classNames/Main';

const Root = ({ store }) => (
	<Provider store={store}>
		<div>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/classes" component={MainClasses} />
				<Route exact path="/classnames" component={MainClassnames} />
			</Switch>
			{/* <div className="devtools">
				<DevTools />
			</div> */}
		</div>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
