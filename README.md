You can compose multiple Higher Order Components:

export default muiThemeable()(connect(mapStateToProps)(ComponentName));
An HOC takes a component (and possibly other arguments) and returns another component. So, the return value of an HOC is a valid argument for another HOC.
