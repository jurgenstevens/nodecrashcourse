// S08: Create an object called person that will have a name and age.
// const person = {
//     name: 'John Doe',
//     age: 30
// }
// S12: Create a class called Person and give it a greeting function using name and age. THEN switch to index.js for S13.
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

// 09: To use the object elsewhere, export the object's name using module.exports. Switch to index.js for S10
module.exports = Person