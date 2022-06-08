#! /usr/bin/env node
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

const list = yargs(hideBin(process.argv))
.usage('Usage: md-links <path> [options]')
.option('v', {
alias: 'validate',
describe: 'Verifica el estado de tus links',
type: 'boolean',
default: false,
})
.option('s', {
    alias: 'stats',
    describe: 'Muestra la cantidad de links que existen',
    type: 'boolean',
    default: false,
})
.help('h').alias('h', 'help')
.argv

const [path] = list._
console.log(list);


/* const [,, ...args] = process.argv
console.log(`Hello World ${args}`) */
