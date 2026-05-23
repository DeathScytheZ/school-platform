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
		client: {start:"_app/immutable/entry/start.D_chh5dU.js",app:"_app/immutable/entry/app.Bgu36ykH.js",imports:["_app/immutable/entry/start.D_chh5dU.js","_app/immutable/chunks/B0e3DZEQ.js","_app/immutable/chunks/B7qgeUId.js","_app/immutable/chunks/CE5cqHET.js","_app/immutable/chunks/BhusDmbJ.js","_app/immutable/entry/app.Bgu36ykH.js","_app/immutable/chunks/CE5cqHET.js","_app/immutable/chunks/BhusDmbJ.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/B7qgeUId.js","_app/immutable/chunks/DjA-N_CN.js","_app/immutable/chunks/BwgKaK4f.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-01fcfQNj.js')),
			__memo(() => import('./chunks/1-d-rqVk2p.js')),
			__memo(() => import('./chunks/2-BbFgZLwc.js')),
			__memo(() => import('./chunks/3-8_4nybM4.js')),
			__memo(() => import('./chunks/4-CE2pHFVU.js')),
			__memo(() => import('./chunks/5-DdJjhojS.js')),
			__memo(() => import('./chunks/6-DBEUGg6m.js')),
			__memo(() => import('./chunks/7-bzwPaeP7.js')),
			__memo(() => import('./chunks/8-DHS3EXsn.js')),
			__memo(() => import('./chunks/9-of5SceI3.js')),
			__memo(() => import('./chunks/10-BXFMEbrp.js')),
			__memo(() => import('./chunks/11-CRQSHhIa.js')),
			__memo(() => import('./chunks/12-BVnWSues.js'))
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
				id: "/staff-dashboard",
				pattern: /^\/staff-dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard",
				pattern: /^\/system-admin-dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard/add-child",
				pattern: /^\/system-admin-dashboard\/add-child\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard/add-parent",
				pattern: /^\/system-admin-dashboard\/add-parent\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard/registration-requests",
				pattern: /^\/system-admin-dashboard\/registration-requests\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/system-admin-dashboard/users",
				pattern: /^\/system-admin-dashboard\/users\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/teacher-dashboard",
				pattern: /^\/teacher-dashboard\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
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
