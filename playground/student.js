"use strict";
exports.__esModule = true;
var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Student.prototype.greet = function () {
        return "Hello " + this.firstName + " " + this.lastName;
    };
    return Student;
}());
exports.Student = Student;
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
exports.Foo = Foo;
exports.MAGIC_NUMBER = Math.floor(Math.random() * 10);
