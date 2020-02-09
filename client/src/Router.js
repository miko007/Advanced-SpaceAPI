import VueRouter from "vue-router";

import Main       from "./components/Main";
import APIKeys    from "./components/APIKeys";
import KeyMasters from "./components/KeyMasters";

class Router extends VueRouter {
	constructor() {
		super({
			routes : [
				{
					path      : "/",
					name      : "Main",
					component : Main
				},
				{
					path      : "/api",
					name      : "API keys",
					component : APIKeys
				},
				{
					path      : "/keymasters",
					name      : "Keymasters",
					component : KeyMasters
				}
			]
		});
	}
}

export default Router;
