import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import App from '../components/App';

import MainClasses from '../components/classes/Main';
import MainClassnames from '../components/classNames/Main';
import MainCustomStyles from '../components/customStyles/Main';
import MainDarkThemes from '../components/darkThemes/Main';
import MainInlineStyle from '../components/inlineStyle/Main';

import MainNested from '../components/nested/Main';
import MainPalette from '../components/palette/Main';
import MainTypography from '../components/typography/Main';
import MainTypographyTheme from '../components/typographyTheme/Main';
import MainTypographyTheme2 from '../components/typographyTheme2/Main';
import MainWithTheme from '../components/withTheme/Main';

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
