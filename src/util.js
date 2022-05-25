import path from 'path';
import fs from 'fs';

// 1. Convertir una ruta relativa en absoluta
// isAbsolute: Verifica si la ruta es absoluta // resolve: Convierte una ruta relativa en una absoluta
export const transformPathAbsolute = argPath => path.isAbsolute(argPath) ? argPath : path.resolve(argPath);
// 2. Verficar la existencia de la ruta
export const verifyPathExist = (argPath) => fs.existsSync(transformPathAbsolute(argPath));
// 3. Verificar que sea archivo
export const verifyIsFile = (argPath) => fs.lstatSync(argPath).isFile();
// 4. Verificar que sea directorio
export const verifyIsDirectory = (argPath) => fs.lstatSync(argPath).isDirectory();
// 5. Identifiar la extensión de la ruta
export const recognizePathExtension = (argPath) => path.extname(argPath);
// 6. Permite leer el contenido de un directorio retornado en un array
export const arrayListFile = (argPath) => {
	let arrayList = fs.readdirSync(argPath);
	if(arrayList.length > 0){
		arrayList= arrayList.map((e) => path.join(argPath, e));
	}
	return arrayList;
};

// console.log(arrayListFile(process.argv[2]));
// 7. Recorrer el directorio

// 8. Identificar la extención de tipo .md
//
/*
export const filterMdFiles = (argPath) => {
	const arrayExtensionsMd = [];
	if(verifyIsDirectory(argPath) === true && recognizingPathExtension(argPath) === '.md'){
    return arrayExtensionsMd.push(argPath);
	}
	else {return fs.readdirSync(argPath)}
}
console.log(filterMdFiles(process.argv[2])); */


// 7. Permite leer el contenido de un archivo
/* export const fileContentShow = (argPath) => { fs.readFile(argPath,'utf-8', (err, data) => {
    if (err) throw err;
    else{console.log(data)};
	});
};
console.log(fileContentShow(process.argv[2])); */




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

