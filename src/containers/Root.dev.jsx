import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';

// import DevTools from './DevTools';

import Routes from './Routes';

const Root = ({ store }) => (
	<Provider store={store}>
		<Switch>
			<Routes />
		</Switch>
		{/* <div className="devtools">
				<DevTools />
			</div> */}
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Root;
