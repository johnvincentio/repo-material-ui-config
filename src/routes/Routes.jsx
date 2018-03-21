import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import App from '../components/App';

import MainClasses from '../components/Classes';
import MainClassnames from '../components/ClassNames';
import MainCustomStyles from '../components/CustomStyles';
import MainDarkThemes from '../components/darkThemes/DarkTheme';
import MainInlineStyle from '../components/InlineStyle';

import MainNested from '../components/Nested';
import MainPalette from '../components/Palette';
import MainTypography from '../components/Typography';
import MainTypographyTheme from '../components/TypographyTheme';
import MainTypographyTheme2 from '../components/TypographyTheme2';
import MainWithTheme from '../components/WithTheme';

import MainScss from '../components/Scss';

const Routes = () => (
	<Fragment>
		<Route exact path="/" component={App} />
		<Route exact path="/classes" component={MainClasses} />
		<Route exact path="/classNames" component={MainClassnames} />
		<Route exact path="/customStyles" component={MainCustomStyles} />
		<Route exact path="/darkThemes" component={MainDarkThemes} />
		<Route exact path="/inlineStyle" component={MainInlineStyle} />

		<Route exact path="/nested" component={MainNested} />
		<Route exact path="/palette" component={MainPalette} />
		<Route exact path="/typography" component={MainTypography} />
		<Route exact path="/typographyTheme" component={MainTypographyTheme} />
		<Route exact path="/typographyTheme2" component={MainTypographyTheme2} />
		<Route exact path="/withTheme" component={MainWithTheme} />

		<Route exact path="/scss" component={MainScss} />
	</Fragment>
);

export default Routes;
