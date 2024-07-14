const { exec } = require("child_process");
const path = require("path");
const watchFile = require("./watchFile");

// 改变了获取参数的逻辑
const options = require("./handleArgs.js")(process.argv);
const { fileName, fileArgs, watch } = options;

const cwd = process.cwd();
const filePath = path.resolve(cwd, fileName);

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
	const watchFiles = watch ? path.resolve(cwd, watch) : filePath;
	// 监听文件的变化
	watchFile(watchFiles, (path) => {
		console.log(`${path} changed!!!!\n`);
		run();
	});

	console.log(`\nListen ${watchFiles}\n`);
};

action();
