import chalk from 'chalk';
import { execSync } from 'node:child_process';
import { LIB_VERSION } from './version.js';

class output {
	static log(output?: string | Array<string> | null | undefined) {
		const square = chalk.hex('5865f2')('▪');
		const start = chalk.hex('414ab0')(chalk.italic(' Bracketed')) + chalk.italic(chalk.white(':'));

		if (!output) return console.log(square + start);

		if (typeof output === 'string') return console.log(square + start, '-', chalk.white(output));

		return output.forEach((msg, index) => {
			if (index === 0) {
				console.log(square + start, '┌', chalk.white(msg));
			} else if (index === output.length - 1) {
				console.log(square + start, '└', chalk.white(msg));
			} else {
				console.log(square + start, '│', chalk.white(msg));
			}
		});
	}
	static getNPMVersion() {
		const version = execSync('npm -v').toString().trim();
		if (!version) return 'NOT FOUND';
		return version;
	}

	static versions = {
		node: process.version,
		lib: LIB_VERSION,
	};
}

export { output };
