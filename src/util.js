import path from 'path';
import fs from 'fs';

// 1. Convertir una ruta relativa en absoluta
// isAbsolute: Verifica si la ruta es absoluta // resolve: Convierte una ruta relativa en una absoluta
export const transformPathAbsolute = argPath => path.isAbsolute(argPath) ? argPath : path.resolve(argPath);
// 2. Verficar la existencia de la ruta
 export const verifyPathExist = (argPath) => fs.existsSync(transformPathAbsolute(argPath));

