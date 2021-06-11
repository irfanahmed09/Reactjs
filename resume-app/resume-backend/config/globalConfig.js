var config = require("./default.json");

var environmentConfig = config["development"];

global.gConfig = environmentConfig;
