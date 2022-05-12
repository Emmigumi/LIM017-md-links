// Adding comment to to index.js
#!/usr/bin/env node

// Code to count length of word
// passed as argument

// Receive argument via command line
const word = process.argv[2];
console.log('TRES', word);
// Counting length
const length = word.length;
console.log('CUATRO length', length);
// Printing it to console
console.log(`Words Length : ${length}`);