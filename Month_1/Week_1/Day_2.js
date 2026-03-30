/*
//SPREAD OPERATOR

let numbers = [3,0,3,5,4];
let max = Math.max(...numbers);
let min = Math.min(...numbers);

console.log(min);
console.log(max);


let fullName ="HF_Merciless"
let letters = [...fullName].join(" ")

console.log(letters)


let fruits = ["apple","banana","orange"]
let vegetables = ["carrots","potatoes","onions"]

let foods = [...fruits,...vegetables,"egg","meat"]

console.log(foods)*/

/*
//REST PARAMETERS

function grocery(...fruits){
    console.log(fruits)
}
function grocery2(...fruits){
    return fruits
}
const fruit1="kiwi"
const fruit2="mango"
const fruit3="strawberry"

grocery(fruit1,fruit2,fruit3)

const fruits=grocery2(fruit1,fruit2,fruit3)
console.log(fruits)

function calculator(...numbers){
    let result=0
    for (let number of numbers) {
        result+=number
    }
    return result
}
const total=calculator(1,2,3,4,5)
console.log(`Your total is $${total}`)

function average(...numbers){
    let result=0
    for (let number of numbers) {
        result+=number
    }
    return result/numbers.length
}
const averages = average(100,50)
console.log(`Your average is ${averages}`)

function combineString(...strings){
    return strings.join("")
}

const fullName=combineString("HF","Merciless","...")
console.log(fullName)*/

/*
//RANDOM PASSWORD GENERATOR

function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars="abcçdefghıijklmnoöprsştuüvyzxqw"
    const uppercaseChars="ABCÇDEFGHIİJKLMNOÖPRSŞTUÜVYZXQW"
    const numbersChars="0123456789"
    const symbolsChars="!@#$%^&*()_+{}[]|;:,.<>?/"

    let allowedChars=""
    let password=""

    allowedChars += includeLowercase ? lowercaseChars : ""
    allowedChars += includeUppercase ? uppercaseChars : ""
    allowedChars += includeNumbers ? numbersChars : ""
    allowedChars += includeSymbols ? symbolsChars : ""

    console.log(allowedChars)

    if (length<=7) {
        return "(Your password need to be at least 8 character long)"
    }
    if (allowedChars.length===0) {
        return "(You need to select at least one type of character)"
    }
    for (let i=0;i<length;i++) {
        const randomIndex=Math.floor(Math.random() * allowedChars.length)
        password+=allowedChars[randomIndex]
    }
    return password
}
const passwordLength=8
const includeLowercase=0
const includeUppercase=0
const includeNumbers=0
const includeSymbols=0

const password=generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols)

console.log(`generated password:${password}`)*/

/*
//CALLBACK FUNCTION

hello(goodbye)

function hello(callback){
    console.log("Hello")
    callback()
}
function wait(){
    console.log("Wait!")
}
function leave(){
    console.log("Leave!")
}
function goodbye(){
    console.log("Goodbye")
}


func(display,5,6)
function func(callback , x , y ){
let result=x+y
    callback(result)
}
function display(result){
    console.log(result)
}*/

/*
//FOREACH LOOP

let numbers=[1,2,3,4,5]

numbers.forEach(cube)
numbers.forEach(display)

function doubler(element,index,array){
    array[index]=element*2
}
function tripler(element,index,array){
    array[index]=element*3
}
function square(element,index,array){
    array[index]=Math.pow(element,2)
}
function cube(element,index,array){
    array[index]=Math.pow(element,3)
}
function display(element){
    console.log(element)
}

let fruits=["kiwi","banana","apple","strawberry"]

fruits.forEach(firstLetter)
fruits.forEach(display)

function upperCase(element,index,array){
    array[index]=element.toUpperCase()
}
function loweCase(element,index,array){
    array[index]=element.toLowerCase()
}
function firstLetter(element,index,array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1)
}
function display(element){
    console.log(element)
}*/

/*
//MAP FUNCTION

const numbers=[1,2,3,4,5]

const cubes=numbers.map(cube)

console.log(cubes)

function square(element){
    return Math.pow(element,2)
}
function cube(element){
    return Math.pow(element,3)
}


const students=["Student1","Student2","Student3"]
const studentsUppercase=students.map(upperCase)
const studentsLowercase=students.map(lowerCase)

console.log(studentsLowercase)

function upperCase(element){
    return element.toUpperCase()
}
function lowerCase(element){
    return element.toLowerCase()
}


const dates=["2005-11-15","2005-10-24","2026-01-03"]
const formattedDates=dates.map(formatDates)

console.log(formattedDates)

function formatDates(date){
    const parts=date.split("-")
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}*/
