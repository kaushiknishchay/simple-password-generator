import React, { Fragment } from 'react';
import AppBar from 'material-ui/AppBar';

export default class AppShell extends React.Component {
	render() {
		return (
			<div>
				<AppBar title={this.props.title} showMenuIconButton={false} />
				<div id="content" style={{margin: '30px'}}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

AppShell.propTypes = {
	title: React.PropTypes.string,
	children: React.PropTypes.node
};
