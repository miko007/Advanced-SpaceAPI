const express = require("express");

const SpaceAPI = require("./models/SpaceAPI");

class App extends express.Router {
	constructor() {
		super();

		this.api = new SpaceAPI();

		this.get("/", (request, response) => {
			response.statusCode = 200;
			response.set("Content-Type", "application/json");
			response.send(JSON.stringify(this.api, null , 4));
		});

		for (let attribute of Object.keys(this.api)) {
			this.get(`/${attribute}`, (request, response) => {
				response.statusCode = 200;
				response.set("Content-Type", "application/json");
				response.send(JSON.stringify(this.api[attribute], null , 4));
			});
		}
	}
}

module.exports = App;
