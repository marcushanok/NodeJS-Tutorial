const {readFile, writeFile} = require('fs');


const getText = (path) =>{
    return new Promise((resolve,reject)=>{
        readFile(path, 'utf8', (err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

// getText('./content/first.text').then((result) => console.log(result)).catch((err) => console.log(err))

const start = async() =>{
    try{
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        console.log(first, second);
    }
    catch(error){
        console.log(error)
    }
    
}

// start()


const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromisse = util.promisify(writeFile);

const start1 = async () =>{
    try{
        const first = await readFilePromise('.content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromisse('./content/result-mind-grenade.txt', `This is just AWESOME : ${first} ${second}`);
        console.log(first, second);
    }
    catch(error){
        console.log(error);
    }
}

// start1()

// const {readFile, writeFile} = require('fs'),promises