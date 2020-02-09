"use strict";

const APIObject = require("./APIObject.js");

class Location extends APIObject {
	constructor(address, latitude, longitude) {
		super();
		this.address = address;
		this.lat     = latitude;
		this.lon     = longitude
	}
}

module.exports = Location;
