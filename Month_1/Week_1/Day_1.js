/*
//VARİABLES

let price=15.99
let firstName="HF_Merciless"
let favoriteFood="Lahmacun"
let email ="Lahmacun@gmail.com"

console.log(typeof firstName)
console.log(firstName)
console.log(`The price is: ${price} `)
console.log(`Your email is: ${email} `)
console.log(`You like: ${favoriteFood} `)


let online = true
console.log(typeof online)
console.log(online)*/

/*
//IF STATEMENT

let fullName = "HF_Merciless"
let age = 20
let isStudent = true
let gender = false

if (gender===true) {
    console.log(`He is ${fullName}`)
    console.log(`He is ${age} years old`)
    if (isStudent===true) {
        console.log(`He is a student`)
    }
    else
    {
        console.log(`He is not a student`)
    }
} else {
    console.log(`She is ${fullName}`)
    console.log(`She is ${age} years old`)
    if (isStudent===true) {
        console.log(`She is a student`)
    }
    else
    {
        console.log(`She is not a student`)
    }

}*/

/*
//OPERATORS

let students =30

students++
students--

students=students+1
students=students-1
students=students*2
students=students/2
students=students**2

students+=1
students-=1
students*=2
students/=2
students**=2

let extrastudents=students%2
console.log(students)*/

/*
//OPERATOR PRECEDENCE

let result=1+2*3+4**2

console.log(result)*/

/*
//CONSTANTS

const PI=3.14159

let radius=10
let circumference

circumference=2*PI*radius

console.log(circumference)*/

/*
//TERNARY OPERATOR

let isStudent=true
let message=isStudent?"You are a student":"You are not a student"

console.log(message)

let time=16
let message3=time<10?"Good Morning":"Good Afternoon"
console.log(message3)

let speedlimit=180
let maximumspeedlimit=speedlimit
let message4=speedlimit>=160?`Speed limit is ${maximumspeedlimit=300}.`:`Speed limit is ${maximumspeedlimit}.`

console.log(message4)*/

/*
//STRİNG METHODS

let fullName="HF_Merciless"

console.log(fullName.charAt(0))
console.log(fullName.indexOf("F"))
console.log(fullName.length)
console.log(fullName.trim())
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.repeat(3))

let result=fullName.startsWith("H")
let result2=fullName.endsWith("s")

console.log(result)
console.log(result2)

let result3=fullName.includes("_")
if (result3===true) {
    console.log("The name can't includes an underscore")
}
    else {
        console.log(fullName)
    }


let phoneNumber="+1 (234) 567-89 01"

phoneNumber=phoneNumber.replace("+","")
phoneNumber=phoneNumber.replace("(","")
phoneNumber=phoneNumber.replace(")","")
phoneNumber=phoneNumber.replace("-","-")
phoneNumber=phoneNumber.replaceAll(" ","-")
phoneNumber=phoneNumber.padStart(25,"-")
phoneNumber=phoneNumber.padEnd(32,"-")

console.log(phoneNumber)
console.log(fullName.replace("F","M"))*/

/*
//STRİNG SLICING

const fullName="HF_Merciless"

let firstName=fullName.slice(0,3)
let lastName=fullName.slice(3)
let firstChar=fullName.slice(0,1) //Actually, we need to use fullName.charAt(0) at here
let lastChar=fullName.slice(-1)


let firstName=fullName.slice(0,fullName.indexOf("_"))
let lastName=fullName.slice(fullName.indexOf("_")+1)

console.log(firstName)
console.log(lastName)
console.log(firstChar)
console.log(lastChar)

const email="HF123@email.com"

let username=email.slice(0,email.indexOf("@"))
let extesion=email.slice(email.indexOf("@")+1,-4)
let domain=email.slice(email.indexOf(".")+1)

console.log(username)
console.log(extesion)
console.log(domain)
*/

/*
//METHOD CHAINING

let fullName="  hF_MercIless "

fullName=fullName.trim().toUpperCase().slice(0,4)+fullName.trim().toLowerCase().slice(4)
console.log(fullName)*/

/*
//LOCİGAL OPERATORS

const temp = 25;

if (temp > 18 && temp <= 30) {
    console.log("The weather is GOOD");
}
else {
    console.log("The weather is BAD");
}


const isSunny = true;

if (!isSunny) {
    console.log("It is SUNNY");
}
else {
    console.log("It is CLOUDY");
}
*/

/*
//EQUAL OPERATORS

const myage = 21;

if (myage !== 21) {
    console.log("I am not 21 years old");
}
else {
    console.log("I am 21 years old");
}*/

/*
//WHİLE LOOP

let username="";

while(username === ""){
    console.log("Please enter a username");
}
console.log(`Hello ${username}`);*/

/*
//FOR LOOP

for (let i=10;i>=1;i--)
{
    console.log(i)
}
console.log("Happy New Year")

for (let x=1;x<=20;x++) {

    if (x==3) {
        continue
    }
    else {
        console.log(x)
    }
}*/

/*
//RANDOM NUMBER

const min=1;
const max=100;
const answer=Math.floor(Math.random() * (max-min+1));

console.log(answer)*/

/*
//FUNCTIONS
function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
}
happyBirthday("BroCode", 25);
happyBirthday("Spongebob", 30);
happyBirthday("Patrick", 37);


function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}
function isEven(number){
    return number % 2 === 0 ? true: false;
}
console.log(isEven(124));


function validEmail(email){
    if (email.includes("@") && email.includes(".")) {
        return true
    }
    else {
        return false
    }

}
console.log(validEmail("hf@merciless.com"))
console.log(validEmail("hf@merciless"))*/

/*
//VARİABLE SCOPE

function scope(){
    let numberx=10
    console.log(numberx)
}
function scope2(){
    let numberx=20
    console.log(numberx)
}
scope()
scope2()*/

/*
// ARRAYS

let fruits = ["apple", "banana", "kiwi"];

fruits.push("coconut");fruits.pop();
fruits.unshift("mango");
fruits.shift();

console. log(fruits[0]);
console. log(fruits[1]);
console. log(fruits[2]);
console. log(fruits[3]);


for (let i = fruits.length-1; i>=0; i--) {
    console.log(fruits[i]);
}
let numOfFruits = fruits.length;
let index = fruits.indexOf("kiwi");

fruits.sort()

console.log(index);
console.log(numOfFruits);*/
