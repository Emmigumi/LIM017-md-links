import { transformPathAbsolute, verifyPathExist, verifyIsFile, verifyIsDirectory, recognizingPathExtension } from '../src/util.js';

const pathTest =
'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\README.md';
const file = 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\src';

describe('transformPathAbsolute', () => {
	it('shoul resolve path in windows', () => {
		expect(transformPathAbsolute('README.md')).toBe(pathTest);
	});
});

describe('verifyPathExist return err', ()=> {
	it('If path doesnt exist: Show err', () => {
		const rute = 'README.js';
		expect(verifyPathExist(rute)).toEqual(false);
	});
})

describe('verifyIsFile', () => {
    it('If is a file: return true', () => {
        expect(verifyIsFile(pathTest)).toEqual(true);
    });
    it('If is not a file: return false', () => {
        expect(verifyIsFile(file)).toEqual(false);
    });
})
describe('verifyIsDirectory', () => {
    it('If is a directory: return true', () => {
        expect(verifyIsDirectory(file)).toEqual(true);
    });
    it('If is not a directory: return false', () => {
        expect(verifyIsDirectory(pathTest)).toEqual(false);
    });
})

describe('recognizingPathExtension', () => {
    const aFile = 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\src\\index.js';
    it('Recognize the type of route extension ', () => {
        expect(recognizingPathExtension(aFile)).toEqual('.js');
    });
    it('Recognize the type of route extension', () => {
        expect(recognizingPathExtension(pathTest)).toEqual('.md');
    });
})
