"use strict";

const APIObject = require("./APIObject.js");
const KeyMaster = require("./KeyMaster.js");

class Contact extends APIObject {
	constructor() {
		super();
		this.phone      = "";
		this.sip        = "";
		this.keymasters = [];
		this.irc        = "";
		this.twitter    = "";
		this.facebook   = "";
		this.google     = "";
		this.identica   = "";
		this.foursquare = "";
		this.email      = "";
		this.ml         = "";
		this.jabber     = "";
		this.issue_mail = "";

		this.keymasters.push(new KeyMaster("Michael Ochmann edd wed ewd ewdewfwrgf wreg gergteght", "MikO", null, "miko007@me.com", "@miko007"));
		this.keymasters.push(new KeyMaster("Michael Ochmann", "MikO", null, "miko007@me.com", "@miko007"));
	}
}

module.exports = Contact;
