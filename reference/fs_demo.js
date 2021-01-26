// REQUIRE FILE SYSTEM AKA FS. Find more about fs here: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
const fs = require('fs');
const path = require('path');

// CREATE A FOLDER. 
// Use mkdir method then join the current directory with a folder named /test, second parameter is for options, none here, then the callback
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...')
// }); 


// CREATE AND WRITE TO FILE
// Use writeFile method, join current directory, create test folder, hello.txt file, second parameter is for actually inserting the text 
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
    if(err) throw err;
    console.log('File written to...')

    // TO ADD MORE TEXT, USE APPEND METHOD
    fs.appendFile(
        path.join(__dirname, '/test', 'hello.txt'),
        ' I love Node.js',
        err => {
            if (err) throw err;
            console.log('File written to...')
        }
    )
}); 

// THIS WILL OVERRIDE THE PREVIOUS WRITEFILE METHOD
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js ', err => {
//     if(err) throw err;
//     console.log('File written to...')
// }); 


// READ FILE
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', err => {
    if(err) throw err;
    console.log('File written to...')
}); 