/*
//FİLTER

let numbers = [1,2,3,4,5]
let evenNumbers = numbers.filter(isEven)
let oddNumbers = numbers.filter(isOdd)

console.log(oddNumbers)

function isEven(number){
    return number % 2 === 0
}
function isOdd(number){
    return number % 2 !== 0
}

const ages=[-1,0,15,17,18,20,25,30,35,40,45,50]
const adult=ages.filter(isAdult)
const child=ages.filter(isChild)
const born=ages.filter(isBorn)

console.log(born)

function isAdult(adult){
    return adult >=18
}
function isChild(child){
    return  child <18 && child >0
}
function isBorn(Born){
    return Born <0
}

const fruits=["apple","banana","kiwi","mango","pineapple"]

console.log(getShortFruits(fruits))
console.log(getLongFruits(fruits))

function getShortFruits(fruits){
    return fruits.filter(fruit=>fruit.length<=5)
}

function getLongFruits(fruits){
    return fruits.filter(fruit=>fruit.length>5)
}*/

/*
//PRACTICE

const numberss=[1,2,3,4,5]
const doubledNumbers=numberss.map(double)

console.log(doubledNumbers)

function double(number){
    return number*2
}

// Example 1: forEach with strings
const items = ['sword', 'shield', 'bow'];
items.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});

// Example 2: forEach with numbers
const numbers = [10, 20, 30];
numbers.forEach((item, index) => {
    console.log(`Index ${index}: ${item}`);
});

const names=["John","Sam","Bob"]
const greetings=names.map(greet)

console.log(greetings)

function greet(name){
    return(`Hello ${name}`)
}

const income = [1000, 2000, 3000, 4000, 5000];
const expense = [10000, 2000, 3000, 4000, 5000];

const totalIncome = income.reduce((acc, curr) => acc + curr, 0);
const totalExpense = expense.reduce((acc, curr) => acc + curr, 0);

const bigIncome = income.filter(amount => amount > 4000);
const bigExpense = expense.filter(amount => amount > 4000);

console.log(`Big Income: ${bigIncome}`);
console.log(`Big Expense: ${bigExpense}`);
console.log(`Total income: ${totalIncome}`);
console.log(`Total expense: ${totalExpense}`);
console.log(`Net: ${totalIncome - totalExpense}`);*/

/*
//REDUCE

const prices=[10,20,30,40,50]
const total=prices.reduce(add)
console.log(total)

function add(accumulator,currentValue){
    return accumulator+currentValue
}

const grades=[10,90,80,70,60]
const maxGrade=grades.reduce(max)
const minGrade=grades.reduce(min)

console.log(minGrade)
console.log(maxGrade)

function max(accumulator,currentValue){
    return Math.max(accumulator,currentValue)
}
function min(accumulator,currentValue){
    return Math.min(accumulator,currentValue)
}*/
