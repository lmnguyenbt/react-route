/* @flow */

// Import component
import DashboardPage from '../../modules/dashboard';

import ComponentsPage from '../../modules/components';
import ButtonsPage from '../../modules/components/buttons';
import BadgesPage from '../../modules/components/badges';

import UserInfoPage from '../../modules/user-info';

//import NotFoundPage from '../../modules/page-404';
//import InternalServerPage from '../../modules/page-500';

const routesFullLayout = [
	{
		path: '/dashboard',
		extrac: true,
		name: 'Dashboard',
		component: DashboardPage
	},
	{
		path: '/components',
		component: ComponentsPage,
		routes: [
			{
				path: '/components/buttons',
				name: 'Buttons',
				component: ButtonsPage
			},
			{
				path: '/components/badges',
				name: 'Badges',
				component: BadgesPage
			}
		]
	},
	{
		path: '/user-info',
		component: UserInfoPage
	},
	{ 
		path: "/",
		redirect: true, 
		to: "/dashboard" 
	}
];

export default routesFullLayout;