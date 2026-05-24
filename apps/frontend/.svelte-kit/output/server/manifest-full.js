export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["agnes-tachyon-uma-musume.gif","favicon.svg","robots.txt","uma-musume-meep.gif"]),
	mimeTypes: {".gif":"image/gif",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Ca6wUJ-m.js",app:"_app/immutable/entry/app.C0EEbiYw.js",imports:["_app/immutable/entry/start.Ca6wUJ-m.js","_app/immutable/chunks/zGfg6ZkI.js","_app/immutable/chunks/Be3a9zSC.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/entry/app.C0EEbiYw.js","_app/immutable/chunks/Co1bWiMt.js","_app/immutable/chunks/DV-SbBOm.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Be3a9zSC.js","_app/immutable/chunks/GG0HJ46a.js","_app/immutable/chunks/5EQo4MA4.js","_app/immutable/chunks/BctPicw9.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/child-dashboard",
				pattern: /^\/child-dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/parent-dashboard",
				pattern: /^\/parent-dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/staff-dashboard",
				pattern: /^\/staff-dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/staff-dashboard/announcements",
				pattern: /^\/staff-dashboard\/announcements\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard",
				pattern: /^\/system-admin-dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard/add-child",
				pattern: /^\/system-admin-dashboard\/add-child\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard/add-parent",
				pattern: /^\/system-admin-dashboard\/add-parent\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard/announcements",
				pattern: /^\/system-admin-dashboard\/announcements\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard/create-class",
				pattern: /^\/system-admin-dashboard\/create-class\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard/registration-requests",
				pattern: /^\/system-admin-dashboard\/registration-requests\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard/users",
				pattern: /^\/system-admin-dashboard\/users\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/teacher-dashboard",
				pattern: /^\/teacher-dashboard\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 17 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
