import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
	root: theme.typography.button
});

function TypographyTheme(props) {
	return <div className={props.classes.root}>This div's text looks like that of a button.</div>;
}

TypographyTheme.propTypes = {
	classes: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default withStyles(styles)(TypographyTheme);
