import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid, Paper, Typography, List, IconButton } from 'material-ui';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import Button from 'material-ui/Button';

// const styles = theme => ({
// 	root: {
// 		width: '100%',
// 		maxWidth: 360,
// 		backgroundColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
// 	}
// });

// const styles = {
// 	root: {
// 		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// 		borderRadius: 3,
// 		border: 0,
// 		color: 'white',
// 		height: 48,
// 		padding: '0 30px',
// 		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)'
// 	},
// 	label: {
// 		textTransform: 'capitalize'
// 	}
// };

const theme = createMuiTheme({
	palette: {
		primary: { main: purple[500] }, // Purple and green play nicely together.
		secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
	}
});

const Link1 = props => <Link to="/classes" {...props} />;
const Link2 = props => <Link to="/classNames" {...props} />;
const Link3 = props => <Link to="/customStyles" {...props} />;
const Link4 = props => <Link to="/darkThemes" {...props} />;
const Link5 = props => <Link to="/inlineStyle" {...props} />;

const Link6 = props => <Link to="/nested" {...props} />;
const Link7 = props => <Link to="/palette" {...props} />;
const Link8 = props => <Link to="/typography" {...props} />;
const Link9 = props => <Link to="/typographyTheme" {...props} />;
const Link10 = props => <Link to="/typographyTheme2" {...props} />;
const Link11 = props => <Link to="/withTheme" {...props} />;

const App = props => (
	<MuiThemeProvider theme={theme}>
		<Button color="primary" component={Link1}>
			Classes
		</Button>
		<Button color="primary" component={Link2}>
			Class Names
		</Button>
		<Button color="primary" component={Link3}>
			Custom Styles
		</Button>
		<Button color="primary" component={Link4}>
			Dark Themes
		</Button>
		<Button color="primary" component={Link5}>
			Inline Style
		</Button>
		<br />
		<Button color="primary" component={Link6}>
			Nested
		</Button>
		<Button color="primary" component={Link7}>
			Palette
		</Button>
		<Button color="primary" component={Link8}>
			Typography
		</Button>
		<Button color="primary" component={Link9}>
			TypographyT heme
		</Button>
		<Button color="primary" component={Link10}>
			Typography Theme2
		</Button>
		<Button color="primary" component={Link11}>
			WithTheme
		</Button>
		<br />
		<Button target="_blank" href="http://www.google.com/">
			Google
		</Button>
		<Button target="_blank" href="#classes">
			href #classes
		</Button>
	</MuiThemeProvider>
);

export default App;

/*
		<Button color="primary">Primary</Button>
		<Button color="secondary">Secondary</Button>

<Link to="/classes/">
							<ListItemText primary="Classes" />
						</Link>
*/
/*
	<nav className="header-nav">
		<ul>
			<li>
				<Link to="/classes/">Classes</Link>
			</li>
		</ul>
	</nav>
*/
/*
import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

function Main(props) {
  return (
    <div>
      <ul>
        <li><IndexLink to="/" activeStyle={{ color: 'red' }}>Home</IndexLink></li>
        <li><Link to="/counter" activeStyle={{ color: 'red' }}>Counter</Link></li>
      </ul>
      {React.cloneElement(props.children, props)}
    </div>
  );
}
Main.propTypes = {
  children: PropTypes.any.isRequired
};

export default Main;
*/

/*
		<Button classes={{ button: `jv` }} className="jv">

classes={{
  paper: `SASS_CLASS_NAME_HERE`,
}}
*/
/*
const muiTheme = {
  palette: {
    textColor: colors.grey200,
    primary1Color: '#ffce00',
    accent1Color: colors.redA200,
    accent2Color: colors.redA400,
    accent3Color: colors.redA100,
  },
  table: {
    height: 'calc(100vh - 122px)'
  },
  tableHeaderColumn: {
    fontSize: '14px'
  }
};
*/
