const path = require("path");
const cwd = process.cwd();

const getArgs = (source, key) => {
	const index = source.indexOf(key);
	let value = null;
	if (index !== -1) {
		value = source[index + 1];
		source.splice(index, 2);
		return {
			[key]: value,
		};
	}
	return null;
};

const handleArgs = (args) => {
	const watchFile = getArgs(args, "-w");
	let filename = getArgs(args, "-f");
	if (filename == null) {
		filename = { "-f": args[2] };
		args.splice(2, 1);
	}
	return {
		fileName: path.resolve(cwd, filename["-f"]),
		watch: watchFile ? path.resolve(cwd, watchFile["-w"]) : null,
		fileArgs: args.slice(2) || [],
	};
};

module.exports = handleArgs;
