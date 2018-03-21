import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import { buttonClass } from '../themes/styles';

function ClassNames(props) {
	console.log('props.classes ', props.classes);
	return (
		<Button className={props.classes.button}>
			{props.children ? props.children : 'class names'}
		</Button>
	);
}

ClassNames.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

ClassNames.defaultProps = {
	children: null
};

export default withStyles(buttonClass)(ClassNames);
