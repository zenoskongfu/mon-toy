const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// 提问函数
const askQuestion = (question) => {
	return new Promise((resolve) => {
		rl.question(question, (answer) => {
			resolve(answer);
		});
	});
};

// 主函数
const main = async () => {
	try {
		// 提示用户输入名字
		const name = await askQuestion("What is your name? ");

		// 提示用户输入年龄
		const age = await askQuestion("How old are you? ");

		// 打印用户输入的信息
		console.log(`Hello, ${name}. You are ${age} years old.`);

		// 关闭接口
		rl.close();
	} catch (error) {
		console.error("Error:", error);
		rl.close();
	}
};

// 运行主函数
main();
