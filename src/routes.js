import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from './components/App';
import Main from './components/Main';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Main}/>
	</Route>
);
