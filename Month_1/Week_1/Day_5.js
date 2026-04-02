/*
//SUPER

class animal{
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    move(speed) {
        console.log(`The ${this.name} is moves at a speed of ${speed}.`)
    }
}
class dog extends animal{

    constructor(name,age,runSpeed) {
        super(name,age)
    this.runSpeed=runSpeed;
    }
    run() {
        console.log(`The ${this.name} can run.`)
        super.move(this.runSpeed)
    }
}
class cat extends animal{

    constructor(name,age,runSpeed) {
        super(name,age)
        this.runSpeed=runSpeed;
    }
    run() {
        console.log(`The ${this.name} can run.`)
        super.move(this.runSpeed)
    }
}
class bird extends animal{

    constructor(name,age,flySpeed) {
        super(name,age)
    this.flySpeed=flySpeed;
}
    fly() {
        console.log(`The ${this.name} can fly.`)
        super.move(this.flySpeed)
    }
}
const dog1=new dog("Rex",3,"100km/h");
const cat1=new cat("Tom",2,"50km/h");
const bird1=new bird("Tweety",1,"100km/h");

console.log(dog1.name,dog1.age,dog1.runSpeed)
console.log(cat1.name,cat1.age,cat1.runSpeed)
console.log(bird1.name,bird1.age,bird1.flySpeed)

dog1.run()
cat1.run()
bird1.fly()
*/

/*
//GETTERS & SETTERS

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    set width(newWidth){
        if (newWidth > 0) {
            this._width = newWidth
        } else {
            console.error("Width must be a positive number")
        }
    }
    set height(newHeight){
        if (newHeight > 0) {
            this._height = newHeight
        } else {
            console.error("Height must be a positive number")
        }
    }
    get width(){
        return `${this._width.toFixed(1)}cm`
    }
    get height(){
        return `${this._height.toFixed(1)}cm`
    }
    get area(){
        return `${(this._width * this._height).toFixed(1)}cm'2`
    }
}
const rectangle = new Rectangle(3, 5)

console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)

class person{
    constructor(name,surname,age) {
        this.name=name;
        this.surname=surname;
        this.age=age;
    }
    set name(newName){
        if (newName.length>2&&typeof(newName)==="string") {
            this._name=newName
        } else {
            console.error("Name must be at least 2 characters long string")
        }
    }
    set surname(newSurname){
        if (newSurname.length>2&&typeof(newSurname)==="string") {
            this._surname=newSurname
        }
        else {
            console.error("Surname must be at least 2 characters long string")
        }
    }
    set age(newAge){
        if (newAge>0&&typeof(newAge)==="number") {
            this._age=newAge
        }
        else {
            console.error("Age must be a positive number")
        }
    }
    get name(){
        return this._name
    }
    get surname(){
        return this._surname
    }
    get age(){
        return this._age
    }
    get fullname(){
        return `${this._name}${this._surname}`
    }
}
const person1=new person("HF_","Merciless",20)

console.log(person1.name)
console.log(person1.surname)
console.log(person1.fullname)
console.log(person1.age)*/



