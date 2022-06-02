import {getStatusLinks} from '../src/validate.js'
import fetch from 'node-fetch';

jest.mock('node-fetch');

describe('getStatusLinks', () => {
it('If status: 200 then message:Ok', () => {
const arrayInitial = [{
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\example1.md',
}];
const arrayValidate = [
    {
     href: 'https://es.wikipedia.org/wiki/Markdown',
     text: 'Markdown',
     file: 'C:\\Users\\Jammie\\OneDrive\\Escritorio\\PX1-CIPHER\\LIM017-md-links\\md-file\\example1.md',
     status: 200,
     message: 'Ok'
    }
];

return getStatusLinks(arrayInitial).then(response => {
    expect(response).toEqual(arrayValidate);
  });
})
it('If status >= 400 then message:Fail', () => {
const arrayInitial = [
    {
        href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        text: 'recurso',
        file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md'
        }
];
const linkValidate = [
    {
        href: 'https://www.youtube.com/watch?v=Lub5qOmY4JQ',
        text: 'recurso',
        file: 'D:\\BOOTCAMP-GITHUB\\Repos\\LIM017-md-links\\README.md',
        status: 404,
        message: 'FAIL'
      }
];
fetch.mockImplementation( ()=>{
    return getStatusLinks(arrayInitial).then(response => {
        expect(response).toEqual(linkValidate);
      });
})

})
})