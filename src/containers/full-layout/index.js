import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Import FullLayout Route
import routes from '../../routes/full-layout';

// Share Component
import Aside from '../../components/aside';
import Header from '../../components/header';
import Breadcrumb from '../../components/breadcrumb';

const RouteWithSubRoutes = (route) => {		
	if(route.redirect) {
		return (
			<Redirect from={route.path} to={route.to}/>
		);
	} else {
		return (
			<Route path={route.path} exact={route.exact || false} render={(props) => {
				return (
					// pass the sub-routes down to keep nesting
					<route.component {...props} routes={route.routes || null}/>
				);
			}}/>
		);
	}
};

class FullLayout extends Component {
	
	render() {
		return (
			<div>
				<Aside />
				
				<div id="right-panel" className="right-panel">
					<Header />
					
					<Breadcrumb />
					
					<Switch>
						{routes.map((route, i) => (
							<RouteWithSubRoutes key={i} {...route} />
						))}
					</Switch>
				</div>
			</div>
		);
	}
}

export default FullLayout;