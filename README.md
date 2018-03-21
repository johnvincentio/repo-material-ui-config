https://stackoverflow.com/questions/45407771/link-cant-be-used-together-with-materialui
https://stackoverflow.com/questions/37843495/material-ui-adding-link-component-from-react-router

classNames('some className', {
addThisClassToo: someExpression,
addThisClassToo: someExpression,
});

/\*
const styles = theme => ({
drawerPaper: {
width: 250
}

});

classes={{
paper: classes.drawerPaper,
}}
classes={{
paper: `SASS_CLASS_NAME_HERE`,
}}
\*/

// Material UI
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const App = () => (
<MuiThemeProvider theme={THEME}>
<Provider store={store}>
<Router history={appHistory} routes={Routes} />
</Provider>
</MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
In the theme prop for MuiThemeProvider you provide the following where

const THEME = createMuiTheme({
typography: {
"fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
"fontSize": 14,
"fontWeightLight": 300,
"fontWeightRegular": 400,
"fontWeightMedium": 500
}
});

You can compose multiple Higher Order Components:

export default muiThemeable()(connect(mapStateToProps)(ComponentName));
An HOC takes a component (and possibly other arguments) and returns another component. So, the return value of an HOC is a valid argument for another HOC.
