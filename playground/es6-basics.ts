// Type system in JS
// var x = "Some String";

// console.log(typeof x);

// x = true;

// console.log(typeof x);

// x = 43;

// console.log(typeof x);


// var x : string = "Some Value";

// console.log(x);


// x = true;

// var x = "Some Value from JS!";
// console.log(x);



// ES6 / TypeScript features : 
// Arrow functions  :short syntax ; preserves the 'this' reference

// ES5 Method

// var numbers = [2,3,4,5];

// var doubleValue = numbers.map(function(value){
//     return value * 2;
// });

// console.log(doubleValue);

//ES6 Method

// var tripleValue = numbers.map((value)=>{return value * 3});
// var quardValue = numbers.map(value => value * 4);
// console.log(quardValue);




// Template String : back tick (``)

//  - Variables inside the string
//  - Write multiline string

// var firstName = "Ajay";

// console.log(`Hello ${firstName},
// I'm Good to learn!`);












// Execution Context (EC):
// 1. Creation : var x = undefined
// 2. Execution 

// Constants and block scopes - scope is restricted to the nearest curly braces
// - let
// - const

// function demo(arr){
//     if(arr.length > 2){
//         let load = "LOADING..." ;
//         console.log(load);             // ERROR - Reference Error
//     }else{
//         let flash = "FLASHING...";
//     }
// }

// demo([2,3,4,5]);


// 'this' : refers to the caller context

// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     sayHello : function(){
//         // return "Hello " + this.firstName + " " + this.lastName;
//         var that = this;
//         function nestedFunc(){
//             return "Hello " + that.firstName + " " + that.lastName;
//         }
//         return nestedFunc();
//     }
// }


// console.log(user.sayHello());


// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     sayHello : function(){
//         return "Hello " + this.firstName + " " + this.lastName;
//     }
// }

// let person = {
//     firstName : "Bam",
//     lastName : "Baz"
// }

// var boundFunc = user.sayHello.bind(person);
// console.log(boundFunc());


//Constructor Pattern in ES5
// function Person (firstName, lastName){
//     // var this = {};
//     var age = 32;
//     this.greet = function (){
//         return "Good Morning!";
//     }
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.sayHi = function(){
//         return "Hi " + this.firstName + " " + this.lastName;
//     }
//     // return this;
// }

// var foo = new Person("Foo", "Bar");
// console.log(foo.sayHi());
// console.log(foo.greet());
// console.log("AGE : ", foo.age); // no property
// var bam = new Person("Bam", "Baz");
// console.log(bam.sayHi());
















// Destructuring : breaking the Objects / Arrays into individual items.

// Mutating the State : React

// let arr = ["foo", "bar", "bam", "baz"];

// let [, , arr3] = arr;

// // console.log(arr3);      // "bam"

// arr3 = "New Value";

// console.log(arr);


// let obj = {
//     drawText : text => {console.log("Drawing " + text)},
//     drawCircle : r => {console.log(Math.PI * r * r)}
// }

// let {drawCircle : dc} = obj;

// // drawText("Sample Text");

// dc(3);

// let [] = arr;


// let person = {
//     firstName: "Foo",
//     lastName: "Bar",
//     friends: ["Bam", "Baz"],
//     address: {
//         street: "201, Main Road",
//         city: "Noida"
//     }
// }

// let { firstName: fn,
//     lastName: ln,
//     friends: [f1,f2],
//     address: {
//         street, city
//     } } = person;

//     console.log(street);
//     console.log(f2);















// Spread & Rest operators ( ... )
// - Spread : destructure the existing Array

// let arr = [3,4,5];
// let newArr = [1,2, arr, 6,7];   
// let serialArr = [1,2, ...arr, 6,7];   

// console.log(newArr);            // [1,2,[3,4,5],6,7]
// console.log(serialArr);         // [1,2,3,4,5,6,7]

// - Rest : creates the collection from individual items
// - Rest must be last parameter in function definition

// function demo(xyz, ...args){
//     console.log(args[0]);
// }

// demo("foo");
// demo("foo", "Bar");
// demo("foo", "Bar", 32);














// Classes & Inheritance
// import { Foo, Student as stud, MAGIC_NUMBER } from './student';

import * as student from './student';
import { Person } from './person';

let user : Person = {
    firstName : "Foo",
    lastName:"Bar",
    age : 32,
    dob : new Date("Dec 1, 1975")
}

let foo = new student.Student(user);
console.log(foo.greet());

console.log(student.MAGIC_NUMBER);


// Prototypical Inheritance // ES5
















// Decorators : 4 types / levels :

//Class level :

    // - Component : @Component({})
    // - Services : @Injectable()
    // - Directive : @Directive()
    // - Pipe : @Pipe()
    // - Modules : @NgModule({})

//Method level
    // - @HostListener()

// Property level
    // @Input()
    // @Output()
    // @HostBinding()

// Parameter level
    //@Inject()











// Additional types : enum, void, any

// let x : any = "Some String";

// x = true;
