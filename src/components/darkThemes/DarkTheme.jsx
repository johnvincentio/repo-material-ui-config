import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import WithTheme2 from './WithTheme2';

const theme = createMuiTheme({
	palette: {
		type: 'dark' // Switching the dark mode on is a single property value change.
	}
});

function DarkTheme() {
	return (
		<MuiThemeProvider theme={theme}>
			<WithTheme2 />
		</MuiThemeProvider>
	);
}

export default DarkTheme;
