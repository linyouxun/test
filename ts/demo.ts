function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class C {
    @f()
    @g()
    method(name) {
        console.log(name)
    }
}

let c = new C();
c.method('name')


// class Employee {
//     private _fullName: string;
//     get fullName() {
//         return this._fullName;
//     }
//     set fullName(name) {
//         this._fullName = name + ' test'
//     }
// }

// const e = new Employee();
// e.fullName = 'lyx';
// console.log(e)

// class Octpus {
//     readonly name: string;
//     readonly numberOfLegs: number = 8;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }

// let dad = new Octpus('Man with the 8 strong legs');
// // dad.name = 'test';
// console.log(dad.name)


// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
//     getName() {
//         return this.name;
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// var s = new Snake('snake');
// console.log(s.getName());

// interface ClockInterface {
//     currentTime: Date;
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) {}
// }

// let clock = new Clock(1, 2);
// clock.setTime(new Date());
// console.log(clock)

// class Animal {
//     name: string;
// }

// class Dog extends Animal {
//     breed: string;
// }

// interface SquareConfig {
//     color?: string;
//     width: number;
//     [p: string]: string|number;
// }

// let s: SquareConfig = {
//     width: 2,
//     name: 2,
//     color: 'red'
// }

// console.log(s);

// interface Point {
//     readonly x: number;
//     readonly y: number;
// }

// const p: Point = {
//     x: 11,
//     y: 13
// }

// console.log(p);

// function printfLabel(labeledObj: {label: string}) {
//     console.log(labeledObj.label);
// }

// var l = {
//     label: 'label'
// }

// printfLabel(l);


// enum Color {Red, Green, Blue}
// let c: Color = Color.Blue
// console.log(c);

// let x: [string, number];
// x = ['string', 10];
// // x = [10, 'string'];
// console.log(x)


// class Student {
//     fullName: string;
//     constructor(firstName: string, lastName: string) {
//         this.fullName = firstName + ' ' + lastName
//     }
// }

// var student = new Student('Youxun', 'Lin');
// console.log(student);


// interface Person {
//     name: string;
//     age: number;
// }

// let p: Person = {
//     name: 'lyx',
//     age: 18
// }

// console.log(p);

// function geeter(person: string) {
//     return 'hello ' + person;
// }
// let user = 'lyx';
// document.body.innerHTML = geeter(user);