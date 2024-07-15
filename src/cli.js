const args = process.argv;

const options = require("./handleArgs.js")(args);

require("./core.js")(options);
