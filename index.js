// S06: Run 'node index.js' in the terminal to see the text in the string below.
// console.log('Hello from Node.js') 
// S07: Create a module/file to import here. Switch to person.js for S08.
// S10: Import person object from person.js
// S10: const person = require('./person')
// S13: Import Person class from person.js
const Person = require('./person')


// S11: Commented below, you can console.log whatever you want to see from the object, the entire obj, the name or the age. Switch to person.js for S12.
// S11: console.log(person) // { name: 'John Doe', age: 30 }
// S11: console.log(person.name) // John Doe
// S11: console.log(person.age) // 30

// S14: Create a new person with arguments passed through the parameters
const person1 = new Person('John Doe', 30);

// S15: Then concatinate the greeting function with the new person you created.
person1.greeting();
