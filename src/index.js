import { transformPathAbsolute} from '../src/util.js';

const mdLinks = (argPath, options) => {
	if (!argPath) {
		// console.log('no hay path');
		return console.log('Ingrese un path');
	}
	return console.log(transformPathAbsolute(argPath));
};
mdLinks(process.argv[2]);
