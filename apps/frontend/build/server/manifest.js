const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.n_fZaDde.js",app:"_app/immutable/entry/app.BJR8H-GT.js",imports:["_app/immutable/entry/start.n_fZaDde.js","_app/immutable/chunks/D6Gu_bJq.js","_app/immutable/chunks/Dq0B8LfS.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/entry/app.BJR8H-GT.js","_app/immutable/chunks/CWvp9Glw.js","_app/immutable/chunks/DEAEsUb4.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dq0B8LfS.js","_app/immutable/chunks/Wy4jd99D.js","_app/immutable/chunks/apFby0wk.js","_app/immutable/chunks/D7JJ4kuK.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-COA3kJh2.js')),
			__memo(() => import('./chunks/1-rQH4eX_c.js')),
			__memo(() => import('./chunks/2-BRLYOdOe.js')),
			__memo(() => import('./chunks/3-idMGdMEb.js')),
			__memo(() => import('./chunks/4-BCyQ4Hzu.js')),
			__memo(() => import('./chunks/5-CEW3aA_t.js')),
			__memo(() => import('./chunks/6-DwuLeI1N.js')),
			__memo(() => import('./chunks/7-Bm7lrzGL.js')),
			__memo(() => import('./chunks/8-Bc1N7srT.js')),
			__memo(() => import('./chunks/9-ClxEz-FW.js')),
			__memo(() => import('./chunks/10-Dy5Po7pX.js')),
			__memo(() => import('./chunks/11-D0Rk0Cwd.js')),
			__memo(() => import('./chunks/12-DTN2ihmp.js')),
			__memo(() => import('./chunks/13-s5HhkC1N.js')),
			__memo(() => import('./chunks/14-K3o_PN4J.js')),
			__memo(() => import('./chunks/15-Bv4xYjsX.js')),
			__memo(() => import('./chunks/16-B_9UlImI.js')),
			__memo(() => import('./chunks/17-B4cMOH7P.js'))
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

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
