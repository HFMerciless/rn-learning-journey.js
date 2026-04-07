/*
//SORT METHOD

let fruits = ['Banana','Orange','Apple','Mango']

fruits.sort()

console.log(fruits)


let numbers = [100,18,29,7,90,84]

numbers.sort((a,b) => (a-b))

console.log(numbers)


const people =[{ name: 'John', age: 25, gpa: 3.6},
               { name: 'Jane', age: 30, gpa: 3.1},
               { name: 'Bob', age: 22, gpa: 3.4}]

people.sort((a,b) => (a.name.localeCompare(b.name)))

console.log(people)
*/

/*
//FİSHER-YATES SHUFFLE ALGORITHM

const cards=[1,2,3,4,5,6,7,8,9,"J","K","A","Q"]
shuffle(cards)
console.log(cards)

function shuffle(array){
for (let i=array.length-1;i>0;i--){
    const random=Math.floor(Math.random()*(i+1));
    [array[i],array[random]]=[array[random], array[i]]
}
}*/

/*
//DATE OBJECTS

const date=new Date(Date.UTC(2023,9,23,9,30,0,0))
const date2=new Date("2023-10-23T09:30:00.000Z")
const date3=new Date(1700000000000)
const date4=new Date()

const year=date.getFullYear()
const month=date.getMonth()
const day=date.getDate()
const hours=date.getHours()
const minutes=date.getMinutes()
const seconds=date.getSeconds()

const dayOfWeek=date.getDay()

const date5=new Date(Date.UTC(2023,11,30,11,59,59,999))
const date6=new Date(Date.UTC(2024,0,1,0,0,0,0))

if (date6>date5) {
    console.log("Happy New Year!")
}

date4.setFullYear(2024)
date4.setMonth(1)
date4.setDate(23)
date4.setHours(9)
date4.setMinutes(30)
date4.setSeconds(0)
date4.setMilliseconds(0)

console.log(dayOfWeek)
console.log(seconds)
console.log(minutes)
console.log(hours)
console.log(day)
console.log(month)
console.log(year)

console.log(date)
console.log(date2)
console.log(date3)
console.log(date4)*/
