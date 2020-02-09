"use strict";

const APIObject = require("./APIObject.js");

class Stream extends APIObject {
	constructor(m4 = null, mjpeg = null, ustream = null) {
		super();
		this.m4      = m4;
		this.mjpeg   = mjpeg;
		this.ustream = ustream;
	}
}

module.exports = Stream;
