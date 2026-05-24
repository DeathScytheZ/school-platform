export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17')
];

export const server_loads = [2,3];

export const dictionary = {
		"/": [4],
		"/auth": [~5],
		"/child-dashboard": [~6],
		"/parent-dashboard": [~7],
		"/staff-dashboard": [~8,[2]],
		"/staff-dashboard/announcements": [~9,[2]],
		"/system-admin-dashboard": [~10],
		"/system-admin-dashboard/add-child": [~11],
		"/system-admin-dashboard/add-parent": [~12],
		"/system-admin-dashboard/announcements": [~13],
		"/system-admin-dashboard/create-class": [~14],
		"/system-admin-dashboard/registration-requests": [~15],
		"/system-admin-dashboard/users": [~16],
		"/teacher-dashboard": [~17,[3]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';