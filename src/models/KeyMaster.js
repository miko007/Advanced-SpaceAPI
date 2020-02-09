"use strict";

const APIObject = require("./APIObject.js");

class KeyMaster extends APIObject {
	constructor(name = null, ircNick = null, phone = null, email = null, twitter = null) {
		super();
		this.name     = name;
		this.irc_nick = ircNick;
		this.phone    = phone;
		this.email    = email;
		this.twitter  = twitter;
	}
}

module.exports = KeyMaster;
