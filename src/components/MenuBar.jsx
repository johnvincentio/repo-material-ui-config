// MenuBar.js

// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Menu, { MenuItem } from 'material-ui/Menu';

// Routing
import { Link } from 'react-router-dom';

// Icons
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';

// import MenuDots from './MenuDots';

const styleSheet = {
	root: {
		width: '100%'
	},
	flex: {
		flex: 1
	},
	list: {
		width: 250,
		flex: 'initial'
	},
	listFull: {
		width: 'auto',
		flex: 'initial'
	}
};

class MenuBar extends Component {
	constructor() {
		super();
		this.state = {
			open: false
		};
	}

	// Toggle function (open/close Drawer)
	toggleDrawer(_state) {
		if (_state === true || _state === false) {
			this.setState({
				open: _state
			});
		} else {
			this.setState({
				open: !this.state.open
			});
		}
	}

	handleLeftOpen = () => this.toggleDrawer(true);
	handleLeftClose = () => this.toggleDrawer(false);

	render() {
		const classes = this.props.classes;

		const mailFolderListItems = (
			<div>
				<ListItem button>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<Link to="/somepage">
						<ListItemText primary="test" />
					</Link>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<StarIcon />
					</ListItemIcon>
					<ListItemText primary="Starred" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<SendIcon />
					</ListItemIcon>
					<ListItemText primary="Send mail" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<DraftsIcon />
					</ListItemIcon>
					<ListItemText primary="Drafts" />
				</ListItem>
			</div>
		);

		const otherMailFolderListItems = (
			<div>
				<ListItem button>
					<ListItemIcon>
						<MailIcon />
					</ListItemIcon>
					<ListItemText primary="All mail" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<DeleteIcon />
					</ListItemIcon>
					<ListItemText primary="Trash" />
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<ReportIcon />
					</ListItemIcon>
					<ListItemText primary="Spam" />
				</ListItem>
			</div>
		);

		const sideList = (
			<div>
				<List className={classes.list} disablePadding>
					{mailFolderListItems}
				</List>
				<Divider />
				<List className={classes.list} disablePadding>
					{otherMailFolderListItems}
				</List>
			</div>
		);

		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar style={{ paddingLeft: '8px', paddingRight: '8px' }}>
						<IconButton color="contrast" aria-label="Menu" onClick={this.toggleDrawer.bind(this)}>
							<MenuIcon />
						</IconButton>
						<Typography type="title" color="inherit" className={classes.flex}>
							Some Software
						</Typography>
						<Button color="contrast">Login</Button>
						{/* <MenuDots /> */}
					</Toolbar>
				</AppBar>
				<Drawer
					open={this.state.open}
					onRequestClose={this.handleLeftClose}
					onClick={this.handleLeftClose}
				>
					{sideList}
				</Drawer>
			</div>
		);
	}
}

MenuBar.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(MenuBar);
