import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';

import CustomStyles from './CustomStyles';

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

const Main = () => (
	<MuiThemeProvider theme={theme}>
		<CustomStyles />
	</MuiThemeProvider>
);

export default Main;
