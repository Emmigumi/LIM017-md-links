import {
	transformPathAbsolute,
	verifyPathExist,
	verifyIsFile,
	verifyIsDirectory,
	readDirectory,
	recognizePathExtension,
	arrayListFile,
	filterbyExtension,
	searchingLinks,
} from '../src/util.js';

const pathTest =
	'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\README.md';
const file =
	'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\src';

describe('transformPathAbsolute', () => {
	it('shoul resolve path in windows', () => {
		expect(transformPathAbsolute('README.md')).toBe(pathTest);
	});
});

describe('verifyPathExist return err', () => {
	it('If path doesnt exist: Show err', () => {
		const rute = 'README.js';
		expect(verifyPathExist(rute)).toEqual(false);
	});
});

describe('verifyIsFile', () => {
	it('If is a file: return true', () => {
		expect(verifyIsFile(pathTest)).toEqual(true);
	});
	it('If is not a file: return false', () => {
		expect(verifyIsFile(file)).toEqual(false);
	});
});
describe('verifyIsDirectory', () => {
	it('If is a directory: return true', () => {
		expect(verifyIsDirectory('./md-file')).toEqual(true);
	});
	it('If is not a directory: return false', () => {
		expect(verifyIsDirectory(pathTest)).toEqual(false);
	});
});

describe('readDirectory', () => {
	const FirstDirectoryTest = ['example1.md', 'example2.js', 'Files', "files-out",];
	it('verify that is directory', () => {
		expect(readDirectory('./md-file')).toEqual(FirstDirectoryTest);
	});
});

describe('recognizePathExtension', () => {
	const aFile =
		'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\src\\index.js';
	it('Recognize the type of route extension ', () => {
		expect(recognizePathExtension(aFile)).toEqual('.js');
	});
	it('Recognize the type of route extension', () => {
		expect(recognizePathExtension(pathTest)).toEqual('.md');
	});
});

describe('arrayListFile', () => {
	const prueba = [
		'md-file\\example1.md',
		'md-file\\example2.js',
		'md-file\\Files\\example3.md',
		'md-file\\Files\\example4.js',
	];
	it('Traverse the directory return list of File', () => {
		expect(arrayListFile('md-file')).toEqual(prueba);
	});
});

describe('filterbyExtension', () => {
	const prueba = [
		'md-file\\example1.md',
		'md-file\\example2.js',
		'md-file\\Files\\example3.md',
		'md-file\\Files\\example4.js',
	];

	const result = ['md-file\\example1.md', 'md-file\\Files\\example3.md'];
	it('Filter files by .md extension', () => {
		expect(filterbyExtension(prueba)).toEqual(result);
	});
});

describe('searchingLinks', () => {
	const fourthArrayTest = [
        {
          href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
          text: 'Reflexiona y luego marca los objetivos que has lle',
          file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\Files\\example3.md'       
        },
        {
          href: 'https://devel.mozia.og/es/docs/Web/JavaScript/Reference/Gobal_Objects/Array/forEach',
          text: 'Array.prototype.forEach() - MDN',
          file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\Files\\example3.md'       
        }
      ]
	it('Searching links and get object', () => {
		expect(searchingLinks('./md-file/Files')).toEqual(fourthArrayTest);
	});
	it('If there is not link, return empty object', () => {
		expect(searchingLinks('./notlinks')).toEqual([]);
	});
});
