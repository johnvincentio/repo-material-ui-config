import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Button from 'material-ui/Button';

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

const Link13 = props => <Link to="/test1" {...props} />;

const App = () => (
	<Fragment>
		<Button color="primary" component={Link1}>
			Classes
		</Button>
		<Button color="secondary" component={Link2}>
			Class Names
		</Button>
		<Button color="primary" component={Link3}>
			Custom Styles
		</Button>
		<Button color="secondary" component={Link4}>
			Dark Themes
		</Button>
		<Button color="primary" component={Link5}>
			Inline Style
		</Button>
		<br />
		<Button color="secondary" component={Link6}>
			Nested
		</Button>
		<Button color="primary" component={Link7}>
			Palette
		</Button>
		<Button color="secondary" component={Link8}>
			Typography
		</Button>
		<Button color="primary" component={Link9}>
			Typography Theme
		</Button>
		<br />
		<Button color="secondary" component={Link10}>
			Typography Theme2
		</Button>
		<Button color="primary" component={Link11}>
			WithTheme
		</Button>
		<Button color="secondary" component={Link12}>
			Scss
		</Button>
		<br />
		<Button target="_blank" href="http://www.google.com/">
			Google
		</Button>
		<Button target="_blank" href="#classes">
			href #classes
		</Button>
		<br />
		<Button color="secondary" component={Link13}>
			Test Nav Links
		</Button>
	</Fragment>
);

export default App;
