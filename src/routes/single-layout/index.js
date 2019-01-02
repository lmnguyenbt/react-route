/* @flow */

// Import component
import LoginPage from '../../modules/login';
import RegisterPage from '../../modules/register';

import NotFoundPage from '../../modules/page-404';
import InternalServerPage from '../../modules/page-500';

const routesSingleLayout = [
	{
		path: '/login',
		name: 'Login',
		exact: true,
		component: LoginPage
	},
	{
		path: '/register',
		name: 'Register',
		component: RegisterPage
	},
	{
		path: '/404',
		name: 'PageNotFound',
		component: NotFoundPage
	},
	{
		path: '/500',
		name: 'InternalServer',
		component: InternalServerPage
	},
	{
		path: '*',
		component: NotFoundPage,
	}
];

export default routesSingleLayout;