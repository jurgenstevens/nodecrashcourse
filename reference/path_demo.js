const path = require('path'); // Add this so you don't have to npm install path. Ref: https://nodejs.org/dist/latest-v14.x/docs/api/path.html

// BASE FILE NAME
console.log(__filename) // ---> /Users/southsidejdot/Desktop/Nodejs/NodeCrashCourse/reference/path_demo.js

// DIRECTORY
console.log(__dirname) // ---> /Users/southsidejdot/Desktop/Nodejs/NodeCrashCourse/reference

// FILE EXTENSION
console.log(path.extname(__filename)) // ---> .js

// CREATE PATH OBJECT
console.log(path.parse(__filename))
// The path ojbect below will give us all of the info regarding the filename
// { root: '/',
//   dir:
//    '/Users/southsidejdot/Desktop/Nodejs/NodeCrashCourse/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo' }

// CONCATENATE PATHS
// If you'd like to add a test dir and then a hello.html file like so: ../test/hello.html then use join method with _dirname for current directory
console.log(path.join(__dirname, 'test', 'hello.html')) // ---> /Users/southsidejdot/Desktop/Nodejs/NodeCrashCourse/reference/test/hello.html