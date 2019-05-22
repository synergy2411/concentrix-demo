import { Person } from './person';

export class Student {
    private firstName : string;
    private lastName : string;
    private age : number;
    private dob : Date;

    constructor(obj : Person){
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.age = obj.age;
        this.dob = obj.dob;
    }

    // constructor(firstName : string, lastName : string, age : number){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }

    greet() : string{
        return "Hello " + this.firstName + " " + this.lastName;
    }
}

export class Foo {}

export const MAGIC_NUMBER = Math.floor( Math.random() * 10);