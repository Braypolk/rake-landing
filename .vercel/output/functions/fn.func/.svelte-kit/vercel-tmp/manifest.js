export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e8e93a04.js","app":"_app/immutable/entry/app.493a0e27.js","imports":["_app/immutable/entry/start.e8e93a04.js","_app/immutable/chunks/scheduler.e336461c.js","_app/immutable/chunks/singletons.860725e5.js","_app/immutable/chunks/index.4552cb11.js","_app/immutable/entry/app.493a0e27.js","_app/immutable/chunks/scheduler.e336461c.js","_app/immutable/chunks/index.892ff8c5.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/add-email",
				pattern: /^\/api\/add-email\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/add-email/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
