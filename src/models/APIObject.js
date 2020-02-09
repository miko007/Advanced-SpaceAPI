"use strict";

class APIObject {
	toJSON() {
		let out = {...this};
		for (let attribute in out) {
			if (
					typeof out[attribute] === "undefined" ||
					out[attribute] === null ||
					out[attribute] === "" ||
					(Array.isArray(out[attribute]) && out[attribute].length === 0)
			) {
				delete out[attribute];
			}
		}
		if (typeof out === "object" && Object.entries(out).length === 0)
			return;
		return out;
	}
}

module.exports = APIObject;

