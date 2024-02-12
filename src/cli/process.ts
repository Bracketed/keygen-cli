import { Command } from 'commander';
import { output } from '../utilities/output.js';
import { LIB_VERSION } from '../utilities/version.js';
import keygen from '../lib/keygen.js';

const logo: Array<string> = [
	'    __ __           ______         ',
	'   / //_/__  __  __/ ____/__  ____ ',
	'  / ,< / _ \\/ / / / / __/ _ \\/ __ \\',
	' / /| /  __/ /_/ / /_/ /  __/ / / /',
	'/_/ |_\\___/\\__, /\\____/\\___/_/ /_/ ',
	'          /____/                   ',

	'A project by Team Bracketed & ninjaninja140!',
];

function run() {
	const program = new Command('keygen');

	program.version(LIB_VERSION).action(async () => {
		console.clear();
		output.log(logo);
		output.log();
		output.log(
			`KeygenCLI by ninjaninja140 | CLI Version: v${output.versions.lib} | Node Version: ${
				output.versions.node
			} | NPM Version: ${output.getNPMVersion()}`
		);
		output.log();
		output.log('Generating Key...');
		output.log(keygen());
		output.log('Generated!');
		output.log('Thank you for using KeygenCLI');
	});

	program.parse(process.argv);
}

export { run };
