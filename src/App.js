import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Import Libs
import './libs';

// Import Css
import './assets/styles/css/normalize.css';
import './assets/styles/css/bootstrap.min.css';
//import './assets/styles/css/font-awesome.min.css';
import './assets/styles/css/themify-icons.css';
import './assets/styles/css/flag-icon.min.css';
//import './assets/styles/css/cs-skin-elastic.css';
import './assets/styles/css/lib/vector-map/jqvmap.min.css'
import './assets/styles/scss/style.css';

// Import Js


// Containers
import FullLayout from './containers/full-layout';
import SingleLayout from './containers/single-layout';

class App extends Component {
  render() {
    return (
		<Switch>
			<Route path="/login" name="Login" component={SingleLayout}/>
			<Route path="/" name="Dashboard" component={FullLayout}/>
		</Switch>
    );
  }
}

export default App;
