/*
//DESTRUCTURING

//Swap the values of two variables

let a=1
let c=2
;[a,c]=[c,a]

console.log(a,c)

//Swap two elements in an array

let colours =["red","green","blue"]
;[colours[0],colours[2]]=[colours[2],colours[0]]

console.log(colours)

//Assign array elements to variables

let colors = ["red","green","blue","black"]
let [first, second, third,...extraColors] = colors

console.log(first,second,third)
console.log(extraColors)

//Extract values from an object

const person = {
    name:"HF",
    surname:"Merciless",
    age :20,
    job:"Developer",
}
const person2 = {
    name:"HF_",
    surname:"merciles",
    age :21,
}
const {name,surname,age,job="Unemployed"} = person2

console.log(name,surname,age,job)

//Destructure in function parameters

function greet({name, surname, age,job="Unemployed"}){
    console.log(`Hello ${name} ${surname}.`)
    console.log(`You are ${age} years old.`)

    if (job==="Unemployed") {
        console.log(`You are unemployed.`)
    }
    else
    console.log(`Your job is ${job}.`)

}

const person = {
    name:"HF",
    surname:"Merciless",
    age :20,
    job:"Developer",
}
const person2 = {
    name:"HF_",
    surname:"merciles",
    age :21,
}
const {name,surname,age,job="Unemployed"} = person2

console.log(name,surname,age,job)

greet(person)
*/

