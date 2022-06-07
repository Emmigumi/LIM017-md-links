import path from 'path';
import fs from 'fs';

// 1. Convertir una ruta relativa en absoluta
// isAbsolute: Verifica si la ruta es absoluta // resolve: Convierte una ruta relativa en una absoluta
export const transformPathAbsolute = argPath =>
	path.isAbsolute(argPath) ? argPath : path.resolve(argPath);
// console.log(transformPathAbsolute(process.argv[2]));
// 2. Verficar la existencia de la ruta
export const verifyPathExist = argPath =>
	fs.existsSync(transformPathAbsolute(argPath));
// console.log(transformPathAbsolute(process.argv[2]));
// 3. Verificar que sea archivo
export const verifyIsFile = argPath => fs.lstatSync(argPath).isFile();
// 4. Verificar que sea directorio
export const verifyIsDirectory = argPath => fs.lstatSync(argPath).isDirectory();
// console.log(verifyIsDirectory(process.argv[2]));
// 5. Identifiar la extensión de la ruta
export const recognizePathExtension = argPath => path.extname(argPath);
// 6. Permite leer los archivos de un directorio retornadolos en un array
export const readDirectory = argPath => fs.readdirSync(argPath);
// console.log(read)
// 7. Recorrer el directorio
export const arrayListFile = argPath => {
	let arrayList = [];
	if (verifyIsDirectory(argPath) === false) {
		arrayList.push(argPath);
	} else {
		readDirectory(argPath).forEach(file => {
			const filePath = path.join(argPath, file);
			arrayList = arrayList.concat(arrayListFile(filePath));
		});
	}
	return arrayList;
};
// console.log(arrayListFile(process.argv[2]));
// 8. Filtro de archivos .md
export const filterbyExtension = arrayList => {
	const listMd = arrayList.filter(
		newFiles => recognizePathExtension(newFiles) === '.md'
	);
	return listMd;
};
// console.log(filterbyExtension(arrayListFile(process.argv[2])));

// 9. Permite obtener los links de los archivos y el array con href, text, file
export const searchingLinks = argPath => {
	const arrayListAll = arrayListFile(argPath);
	const arrayListMd = filterbyExtension(arrayListAll);
	const fullLinkOnlyRegex = /\[(.*)\]\(((?:\/|https?:\/\/).*)\)/gm;
	const regExpURL = /\(((?:\/|https?:\/\/).*)\)/g;
	const regExpText = /\[(.*)\]/g;
	let arrayLinks = [];
	if (arrayListMd.length > 0) {
		arrayListMd.forEach(fileMd => {
			const readContentFile = fs.readFileSync(fileMd, 'utf8');
			const getLinks = readContentFile.match(fullLinkOnlyRegex);
			if (getLinks) {
				const destructureLink = getLinks.map(link => {
					const onlyLinkReturn = link.match(regExpURL).join().slice(1, -1);
					const onlyTextReturn = link.match(regExpText).join().slice(1, -1).substring(0, 50);
					return {
						/* esta fx flecha permite retornar un objeto sin necesidad de declararlo */
						href: onlyLinkReturn,
						text: onlyTextReturn,
						file: transformPathAbsolute(fileMd),
					};
				});
				arrayLinks = arrayLinks.concat(destructureLink);
			}
		});
		return arrayLinks;
	}
};
// console.log('holi', searchingLinks(process.argv[2]));

// 11. Return de option: stats
export const infoStats = (arrayListOfValidate) => {
	const uniqueLinks = new Set(arrayListOfValidate.map((element) => element.href));
	console.log(`Total Links: ${arrayListOfValidate.length} \nUnique Links:  ${uniqueLinks.size}`);
}

export const totalInfo = (arrayListOfValidate) => {
const brokenLinks = arrayListOfValidate.filter((element) => element.message === 'Fail');
const uniqueLinks = new Set(arrayListOfValidate.map((element) => element.href));
console.log(`Total Links: ${arrayListOfValidate.length} \nUnique Links:  ${uniqueLinks.size} \nBroken Links:  ${brokenLinks.size}`);
}
const jam = [
	{
	  href: 'https://es.wikipedia.org/wiki/Markdown',
	  text: 'Markdown',
	  file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\example1.md',
	  status: 200,
	  message: 'Ok'
	},
	{
	  href: 'https://devel.mozia.og/es/docs/Web/JavaScript/Reference/Gobal_Objects/Array/forEach',
	  text: 'Array.prototype.forEach() - MDN',
	  file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\example1.md',
	  status: 500,
	  message: 'Fail'
	},
	{
	  href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
	  text: 'Reflexiona y luego marca los objetivos que has lle',
	  file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\Files\\example3.md',
	  status: 200,
	  message: 'Ok'
	},
	{
	  href: 'https://devel.mozia.og/es/docs/Web/JavaScript/Reference/Gobal_Objects/Array/forEach',
	  text: 'Array.prototype.forEach() - MDN',
	  file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\Files\\example3.md',
	  status: 500,
	  message: 'Fail'
	}
  ];
console.log(infoStats(jam));



















/* ------------------------------------------------ */
// 1. Verificar que la ruta existanta 1
/* export const verifyPathExist = argPath => {
    const pathFile = fs.statSync(argPath)
    if(pathFile.isFile() === true) {
        console.log('Is a File');
    }
    else if(pathFile.isDirectory() === true) {
        console.log('is a directory');
    }
};
    verifyPathExist(process.argv[2] */
/* 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\README.md' */
//  );
// 1.a Verificar que la ruta exista en nuestro boilerplate 2
/* export const verifyPathExist = (argPath) => { fs.stat(argPath, (error, stats) => {
    if (error) {
      console.log('No such file or directory');
    }
    else if (stats.isFile() === true) {
        console.log("Is a file");
    }
    else if(stats.isDirectory() === true) {
        console.log("Is a directory");
    }
  });
}
verifyPathExist(process.argv[2]); */
