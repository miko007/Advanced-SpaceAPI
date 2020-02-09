"use strict";

const APIObject = require("./APIObject.js");

class Cache extends APIObject {
	constructor() {
		super();
		this.schedule = "";
	}
}

module.exports = Cache;
