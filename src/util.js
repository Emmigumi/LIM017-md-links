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
export const recognizingPathExtension = (argPath) => path.extname(argPath);

