const {readFileSync, writeFileSync} = require('fs')


console.log('start')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8')

console.log('Done reading with the files')

// console.log(first,second)

writeFileSync('./content/result.sync.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'})

console.log('Done writing the files')
console.log('Fineshed the task')