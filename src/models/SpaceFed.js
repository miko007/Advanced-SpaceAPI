"use strict";

const APIObject = require("./APIObject.js");

class SpaceFed extends APIObject {
	constructor(spacenet = false, spacesaml = false, spacephone = false) {
		super();
		this.spacenet   = spacenet;
		this.spacesaml  = spacesaml;
		this.spacephone = spacephone;
	}
}

module.exports = SpaceFed;
