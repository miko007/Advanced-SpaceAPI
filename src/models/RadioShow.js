"use strict";

const APIObject = require("./APIObject.js");

class RadioShow extends APIObject {
	constructor() {
		super();
		this.name  = "";
		this.url   = "";
		this.type  = "";
		this.start = "";
		this.end   = "";
	}
}

module.exports = RadioShow;
