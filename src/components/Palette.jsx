import React, { Fragment } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import Button from 'material-ui/Button';

const theme = createMuiTheme({
	palette: {
		primary: { main: purple[500] }, // Purple and green play nicely together.
		secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
	}
});

function Palette() {
	return (
		<Fragment>
			<Button color="primary">Primary Button</Button>
			<Button color="secondary">Secondary Button</Button>
			<MuiThemeProvider theme={theme}>
				<div>
					<Button color="primary">Primary Button, new Theme</Button>
					<Button color="secondary">Secondary Button, new Theme</Button>
				</div>
			</MuiThemeProvider>
		</Fragment>
	);
}

export default Palette;
