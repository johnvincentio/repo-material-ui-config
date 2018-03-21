import React from 'react';
import { cyan500 } from 'material-ui/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';

import Classes from './Classes';
import ClassNames from './ClassNames';

import TypographyTheme from './TypographyTheme';
import TypographyTheme2 from './TypographyTheme2';

import InlineStyle from './InlineStyle';

import Palette from './Palette';

import DarkTheme from './DarkTheme';

import Typography from './Typography';

import CustomStyles from './CustomStyles';

import WithTheme from './WithTheme';
import Nested from './Nested';

// import classes from './main.scss';

import './main.scss';

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

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000'
		}
	}
});

console.log('theme ', theme);

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const Main = () => (
	<MuiThemeProvider theme={theme}>
		<InlineStyle />
		<Classes />
		<ClassNames />
		<TypographyTheme />
		<Palette />
		<DarkTheme />

		<br />
		<TypographyTheme2 />
		<br />
		<CustomStyles />
		<br />
		<WithTheme />
		<br />
		<Nested />
		<br />
		<Button classes={{ root: 'main' }}>Default</Button>
		<Button classes={{ root: 'jv2' }}>JV2</Button>
		<div className="alphabetagamma">anything</div>
		<div className="delta">delta</div>
		<div className="main">jv</div>
		<br />
		<Typography />

		{/* <AppBar color="primary">AppBar 1</AppBar>
		<AppBar color="secondary">AppBar 2</AppBar> */}
		{/* <AppBar classname="delta">AppBar 3</AppBar> */}
		{/* <AppBar classes={{ colorDefault: `.delta` }}>AppBar 3</AppBar> */}
	</MuiThemeProvider>
);

export default Main;

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
