import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';

import Routes from './Routes';

const Root = ({ store }) => (
	<Provider store={store}>
		<Switch>
			<Routes />
		</Switch>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
