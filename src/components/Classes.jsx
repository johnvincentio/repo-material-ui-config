import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import { buttonStyle } from '../themes/styles';

function Classes(props) {
	return (
		<Button
			classes={{
				root: props.classes.root, // class name, e.g. `classes-root-x`
				label: props.classes.label // class name, e.g. `classes-label-x`
			}}
		>
			{props.children ? props.children : 'classes'}
		</Button>
	);
}

Classes.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

Classes.defaultProps = {
	children: null
};

export default withStyles(buttonStyle)(Classes);
