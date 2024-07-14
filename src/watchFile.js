const chokidar = require("chokidar");

const watchFile = (fileName, callback) => {
	chokidar.watch(fileName).on("change", (path) => callback(path));
};

module.exports = watchFile;
