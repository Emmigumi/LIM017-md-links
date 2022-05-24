import { transformPathAbsolute, verifyPathExist } from '../src/util.js';

const pathTest =
'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\README.md';

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
