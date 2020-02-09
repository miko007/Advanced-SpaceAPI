import Vue       from 'vue'
import App       from './App.vue'
import VueRouter from "vue-router";

import { library }         from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
	faUserSecret,
	faInfoCircle,
	faKey,
	faUserCog,
	faPlusCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(
	faUserSecret,
	faInfoCircle,
	faKey,
	faUserCog,
	faPlusCircle
);

import Router from "./Router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.component("font-awesome-icon", FontAwesomeIcon);

const router = new Router();

new Vue({
	render : h => h(App),
	router
}).$mount('#app');
