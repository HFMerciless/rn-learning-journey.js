/*
//FUNCTİON EXPRESSİONS

function expression(){
    console.log("Hello")
}
expression()

const hello=function (){
    console.log("Hello")
}
hello()

setTimeout(function (){
    console.log("Hello")
},3000)


const numbers=[1,2,3,4,5,6]
const squares=numbers.map(square)

console.log(squares)

function square(number){
    return Math.pow(number,2)
}
const numbers=[1,2,3,4,5,6]
const squares=numbers.map(function (number){
    return Math.pow(number,2)
})

console.log(squares)


const numbers=[1,2,3,4,5,6]

const cubes=numbers.map(function (number){
    return Math.pow(number,3)
})
console.log(cubes)

const evennums=numbers.filter(function (number){
    return number % 2 === 0
})
console.log(evennums)

const oddnums=numbers.filter(function (number){
    return number % 2 !== 0
})
console.log(oddnums)

const total=numbers.reduce(function (accumulator,currentValue){
    return accumulator+currentValue
})
console.log(total)

*/

/*
//ARROW FUNCTIONS

const greet=(days,name) => {console.log(`Hello ${name}`)
                       console.log(`Welcome to the world of JavaScript! You are learning javascript for ${days} days.`)}
greet(4,"HF_Merciless")

const numbers=[1,2,3,4,5,6]

const squares=numbers.map(number=>Math.pow(number,2))

console.log(squares)

const cubes=numbers.map(number=>Math.pow(number,3))

console.log(cubes)

const evennums=numbers.filter(number=>number%2===0)

console.log(evennums)

const oddnums=numbers.filter(number=>number%2!==0)

console.log(oddnums)

const total=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue)

console.log(total)*/

/*
//OBJECT

const person={
    name:"HF ",
    lastName:"Merciless",
    age:20,
    isStudent:0,
    gender:1,
    job:()=>console.log(`${person.name} ${person.lastName} is a developer`)
}

if (person.gender==true) {
    console.log(`He is ${person.name}${person.lastName}`)
    console.log(`He is ${person.age} years old`)
    person.job()

    if (person.isStudent===true) {
        console.log(`He is a student`)
    }
    else
    {
        console.log(`He is not a student`)
    }
}
if (person.gender==false) {
    console.log(`She is ${person.name}${person.lastName}`)
    console.log(`She is ${person.age} years old`)
    person.job()

    if (person.isStudent===true) {
        console.log(`She is a student`)
    }
    else
    {
        console.log(`She is not a student`)
    }
}*/

/*
//THİS

const person={
    name:"HF ",
    lastName:"Merciless",
    sayhello:function (){console.log(`Hello ${this.name}${this.lastName}`)},
}
person.sayhello()*/

/*
//CONSTRUCTOR METHOD

function car(brand,model,year)
{
        this.brand=brand
        this.model=model
        this.year=year
        this.drive=function (){console.log(`You are driving a ${year} model ${this.brand} ${this.model}`)}
}

const mycar=new car("BMW","X5",2025)
const mycar2=new car("Lamborghini","Aventador",2021)
const mycar3=new car("Tesla","Model S",2026)

mycar.drive()
mycar2.drive()
mycar3.drive()
*/

/*
//CLASS

class product{
    constructor(name,price){
        this.name=name,
        this.price=price
    }
    show(){
        console.log(`The product name is ${this.name} and the price is ${this.price}`)
    }
    calculateDiscount(discount){
        return this.price-(this.price*discount/100)
    }
}
const discount=10

const myproduct=new product("Laptop",1500)
const myproduct2=new product("Smartphone",1000)

const total=myproduct.calculateDiscount(discount)
const total2=myproduct2.calculateDiscount(discount)

console.log(total)
console.log(total2)*/

/*
//STATİC

class mathUtil{
    static pi=3.14159

    static getdiameter(radius){
        return 2*radius
    }
    static getcircumference(radius){
        return 2*Math.PI*radius
    }
    static getarea(diameter){
        return Math.PI*diameter**2
    }
}
console.log(mathUtil.pi)
console.log(mathUtil.getdiameter(10))
console.log(mathUtil.getcircumference(10))
console.log(mathUtil.getarea(10))


class user{
    static userCount=0
    constructor(name,age){
        this.name=name,
        this.age=age,
        user.userCount++
    }
    static getuserCount(){
        console.log(`There are ${user.userCount} users active.`)
    }
    greet(){
        console.log(`Hello ${this.name}`)
    }
}
const user1=new user("HF_Merciless",20)
const user2=new user("HF_Merciles",21)
const user3=new user("HF Merciless",22)

console.log(user1.name,user1.age)
console.log(user2.name,user2.age)
console.log(user3.name,user3.age)
console.log(user.userCount)

user1.greet()
user2.greet()
user3.greet()
user.getuserCount()*/

/*
//İNHERITANCE

class animal{
    alive=true

    eat(){
        console.log(`This ${this.name} is eating.`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping.`)
    }
}
class dog extends animal{
    name="Dog"
}
class cat extends animal{
    name="Cat"
}
class bird extends animal{
    name="Bird"
    fly(){
        console.log(`This ${this.name} is flying.`)
    }
}
const dog1=new dog()
const cat1=new cat()
const bird1=new bird()

dog1.alive=false

console.log(dog1.alive)

dog1.eat()
dog1.sleep()

console.log(cat1.alive)

cat1.eat()
cat1.sleep()

console.log(bird1.alive)

bird1.eat()
bird1.sleep()
bird1.fly()*/

