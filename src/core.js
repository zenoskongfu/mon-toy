const { exec } = require("child_process");
const watchFile = require("./watchFile");

module.exports = function core(options) {
	const { fileName, fileArgs, watch } = options;

	const run = () => {
		exec(`node ${fileName} ${fileArgs.join(" ")}`, (error, stdout, stderr) => {
			if (error) {
				console.log("error: ", error);
				return;
			}
			if (stderr) {
				console.log("stderr: ", stderr);
				return;
			}
			console.log(stdout);
		});
	};

	const action = () => {
		// 执行文件
		run();
		// 指定被监听的文件
		const watchFiles = watch ? watch : fileName;
		// 监听文件的变化
		watchFile(watchFiles, (path) => {
			console.log(`${path} changed!!!!\n`);
			run();
		});

		console.log(`\nListen ${watchFiles}\n`);
	};

	action();
};
