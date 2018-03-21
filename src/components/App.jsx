import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Grid, Paper, Typography, List, IconButton } from 'material-ui';
import { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import Button from 'material-ui/Button';

/*
background-color: #617fde;
border-color: #5474db

rgb(80, 105, 196) #5069c4

#26AFEB
#337ab7

feediator
#2d3e50
#1f8dd

*/

/*
$primary-color-dark:   #1976D2
$primary-color:        #2196F3
$primary-color-light:  #BBDEFB
$primary-color-text:   #FFFFFF
$accent-color:         #FF5722
$primary-text-color:   #212121
$secondary-text-color: #757575
$divider-color:        #BDBDBD
*/

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

const Link12 = props => <Link to="/scss" {...props} />;

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
			Typography Theme
		</Button>
		<br />
		<Button color="primary" component={Link10}>
			Typography Theme2
		</Button>
		<Button color="primary" component={Link11}>
			WithTheme
		</Button>
		<Button color="primary" component={Link12}>
			Scss
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
