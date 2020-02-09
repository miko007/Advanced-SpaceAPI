"use strict";

const Express = require("express");
const env     = require("dotenv").config();
const path    = require("path");
const App     = require("./src/App");
const State   = require("./src/models/State");
const Std     = require("./src/Std");

const express = Express();
const app     = new App();

express.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
express.use("/admin", Express.static(path.join(__dirname, "client/dist")));
express.use("/", app);

const PORT = process.env.PORT || 8080;

express.listen(PORT).on("error", error => {
	switch (error.code) {
		case "EADDRINUSE":
			Std.Log(`[main] ERROR: the port '${PORT}' is already in use.`, Std.LogLevel.FATAL);
			break;
		default:
			break;
	}
});

