"use strict";

const APIObject = require("./APIObject.js");

class Icon extends APIObject {
	constructor() {
		super();
		this.open   = "";
		this.closed = "";
	}
}

class State extends APIObject {
	constructor() {
		super();
		this.open = false;
		this.lastchange = new Date();
		this.lastchange = this.lastchange.getTime();
		this.trigger_person = "";
		this.message = "";
		this.icon = new Icon();
	}
}

module.exports = State;
