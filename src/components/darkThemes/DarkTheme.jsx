import React, { Fragment } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import WithTheme from './WithTheme';

const theme = createMuiTheme({
	palette: {
		type: 'dark' // Switching the dark mode on is a single property value change.
	}
});

function DarkTheme() {
	return (
		<Fragment>
			<WithTheme />
			<MuiThemeProvider theme={theme}>
				<WithTheme />
			</MuiThemeProvider>
		</Fragment>
	);
}

export default DarkTheme;
