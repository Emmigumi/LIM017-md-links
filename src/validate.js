/* eslint-disable yoda */
import fetch from 'node-fetch';
// 10. Permite obtener el estado de cada uno de mis links
// queremos un nuevo array con el status de mis links
export const getStatusLinks = arrayLinks => {
	const array = arrayLinks.map(object =>
		fetch(object.href)
			.then((response) => {
				if (response.status >= 200 && response.status < 400) {
					object.status = response.status
                    object.message = 'Ok'
					return object
				} else if (response.status >= 400) {
                    object.status = response.status
                    object.message = 'Fail'
					return object
                }
            })
            .catch(() => {
				object.status = 500
                object.message = 'Fail'
				return object
			})
	)
	return Promise.all(array)/* .then(value => {
		console.log(value);
	}); */
}

/* const arr = [
	{
		href: 'https://es.wikipedia.org/wiki/Markdown',
		text: 'Markdown',
		file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\example1.md',
	},
	{
		href: 'https://devel.mozia.og/es/docs/Web/JavaScript/Reference/Gobal_Objects/Array/forEach',
		text: 'Array.prototype.forEach() - MDN',
		file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\example1.md',
	},
	{
		href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
		text: 'Reflexiona y luego marca los objetivos que has lle',
		file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\Files\\example3.md',
	},
	{
		href: 'https://devel.mozia.og/es/docs/Web/JavaScript/Reference/Gobal_Objects/Array/forEach',
		text: 'Array.prototype.forEach() - MDN',
		file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\Files\\example3.md',
	},
];
 */
// console.log(getStatusLinks(arr));
