import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import FullLayout Route
import routes from '../../routes/full-layout';

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

class ComponentsComponent extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Switch>
				{this.props.routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		);
	}
} 

export default ComponentsComponent;