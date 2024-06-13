export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","favicon-16x16.png","favicon-32x32.png","favicon.ico","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.13735e06.js","app":"_app/immutable/entry/app.2492e8ea.js","imports":["_app/immutable/entry/start.13735e06.js","_app/immutable/chunks/vendor.f17ea74c.js","_app/immutable/entry/app.2492e8ea.js","_app/immutable/chunks/vendor.f17ea74c.js"],"stylesheets":[],"fonts":[]},
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
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
