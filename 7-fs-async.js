const {readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    console.log('Done reading with the first file')

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        console.log('Done reading with the second file')

        writeFile('./content/result-async.txt',`Here is the result : ${first}, ${second}`,(err,result=>{
            if(err){
                console.log(err)
                return
            }
            console.log('Done with writing the files')
        }))
    })
})

console.log('Completed the task')