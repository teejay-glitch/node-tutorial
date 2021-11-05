const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

//writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`); 
//TO APPEND TEXT TO THE CURRENT TEXT FILE, USE
writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second}`, {flag:'a'}); 
