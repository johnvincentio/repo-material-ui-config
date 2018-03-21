import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';

// import classes from './main.scss';

import './main.scss';

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

const Scss = () => (
	<MuiThemeProvider theme={theme}>
		<Button classes={{ root: 'main' }}>Default</Button>
		<Button classes={{ root: 'jv2' }}>JV2</Button>
		<div className="alphabetagamma">anything</div>
		<div className="delta">delta</div>
		<div className="main">jv</div>
		<br />
	</MuiThemeProvider>
);

export default Scss;
