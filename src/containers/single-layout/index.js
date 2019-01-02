import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Import SingleLayout Route
import routes from '../../routes/single-layout';

const RouteWithSubRoutes = (route) => {
	return (
		<Route path={route.path} exact={route.exact || false} render={(props) => {
			return (
				// pass the sub-routes down to keep nesting
				<route.component {...props} routes={route.routes || null}/>
			);
		}}/>
	);
};

class SingleLayout extends Component {
	
	render() {
		return (
			<div className="sufee-login d-flex align-content-center flex-wrap">
				<Switch>
					{routes.map((route, i) => (
						<RouteWithSubRoutes key={i} {...route} />
					))}
				</Switch>
			</div>
		);
	}
}

export default SingleLayout;