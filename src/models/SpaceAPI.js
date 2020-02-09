"use strict";

const express = require("express");

const APIObject = require("./APIObject.js");
const Channel = require("../Channel.js");

const Location = require("./Location.js");
const SpaceFed = require("./SpaceFed.js");
const Stream = require("./Stream.js");
const State = require("./State.js");
const Contact = require("./Contact.js");
const Cache = require("./Cache.js");

const General = require("../../data/general");
const Package = require("../../package");

class SpaceAPI extends APIObject {
	constructor() {
		super();
		this.api                  = Package.apiVersion;
		this.space                = General.spaceName;
		this.logo                 = General.logoURL;
		this.url                  = General.websiteURL;
		this.location             = new Location(General.address, General.spaceLatitude, General.spaceLongitude);
		this.spacefed             = new SpaceFed();
		this.cam                  = [];
		this.stream               = new Stream();
		this.state                = new State();
		this.events               = [];
		this.contact              = new Contact();
		this.issue_report_channel = Channel.MAIL;
		this.sensors              = [];
		this.feeds                = [];
		this.cache                = new Cache();
		this.projects             = [];
		this.radio_show           = [];
	}

	addCam(camURL = null) {
		if (camURL !== "" && camURL !== null)
			this.cam.push(camURL);
	}

	addProject(projectURL = null) {
		if (projectURL !== "" && projectURL !== null)
			this.cam.push(projectURL);
	}
}

module.exports = SpaceAPI;

