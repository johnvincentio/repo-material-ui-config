import { createMuiTheme } from 'material-ui/styles';

import purple from 'material-ui/colors/purple';
import blue from 'material-ui/colors/blue';
import cyan from 'material-ui/colors/cyan';

export const baseTheme = createMuiTheme({
	palette: {
		primary: { main: blue[500] },
		secondary: { main: cyan[500] }
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	}
});

export const theme = createMuiTheme({
	palette: {
		primary: { main: purple[500] }, // Purple and green play nicely together.
		secondary: { main: '#11cb5f' } // This is just green.A700 as hex.
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	}
});

export const theme3 = createMuiTheme({
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

/*
const theme = createMuiTheme({
	appBar: {
		color: Colors.cyan400,
		textColor: Colors.white
	},
	palette: {
		primary1Color: Colors.cyan500,
		primary2Color: Colors.blueGrey700,
		accent1Color: Colors.deepOrange500,
		accent2Color: Colors.blueGrey400,
		accent3Color: Colors.blueGrey500
	},
	cardMedia: {
		overlayContentBackground: fade(Colors.darkBlack, 0.87)
	}
});
*/

/*

import purple from 'material-ui/colors/purple';
import red from 'material-ui/colors/red';

const primary = red[500]; // #F44336
const accent = purple['A200']; // #E040FB
const accent2 = purple.A200; // #E040FB (alternative method)


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
