/*
//VARİABLE TYPES

let age=20
let userName="HF_Merciless"
let isReal=true

age=21

console.log(age)
console.log(userName)*/

/*
//NULL AND UNDEFINED

let someValue:null
let anotherValue:undefined

someValue=null
anotherValue=undefined*/

/*
//TSCONFİG

console.log("Hello World")
console.log("Hello guys!")
*/

/*
//ARRAYS

let fruits:string []=["Apple","Banana","Kiwi"]
let ages:number[]=[18,20,22,25]

fruits.push("Strawberry")
ages.push(31)

console.log(fruits)
console.log(ages)

let names=["HF","Merciless","HF_Merciless"]

const f=fruits[3]

console.log(names)
console.log(f)

let things=[1,true,"Hello"]

const t=things[0]
*/

/*
//OBJECT LİTERALS

let user:{name:string,surname:string,age:number,job:boolean}={
    name:"HF",
    surname:"Merciless",
    age:20,
    job:true
}
user.age=21*/

/*
//FUNCTİONS
function add(a:number,b:number):number{
    return a+b
}
const substract= (a:number, b:number):number => {
    return a - b
}
function addAllNumbers(items:number[]){
    const total=items.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
    console.log(total)
}
addAllNumbers([1,2,3,4,5])
add(1,2)
substract(1,2)*/

/*
//TUPLES

let person:[string,string,number,boolean] = ["HF","Merciless",20,true]

let hsla: [number, string, string, number]
hsla = [120, "%100", "%50", 0.5]


function useCord():[number,number] {
    const lat=10
    const lon=10
    return [lat,lon]
}
const [lat,lon]=useCord()


let user:[name:string,age:number]

user=["HF_Merciless",21]
console.log(user[0])*/

/*
//İNTERFACES

interface Author {
    name: string,
    avatar: string
}
const authorOne: Author = {name:"mario", avatar: "/img/mario.png"}

interface post{
    title:string,
    body:string,
    tags:string[],
    createdAt:Date,
    author:Author
}

const postOne: post={
    title: "My first post",
    body :"This is my first post",
    tags :["typescript","javascript"],
    createdAt:new Date(),
    author:authorOne
}
function createPost(post:post){
    console.log(post)
}
createPost(postOne)

let posts:post[]=[]
posts.push(postOne)*/

/*
//TYPE ALİASES

type rgb= [number, number, number]

function getRandomColor():rgb{
    const r=Math.floor(Math.random()*255)
    const g=Math.floor(Math.random()*255)
    const b=Math.floor(Math.random()*255)
    return [r,g,b]
}
const color=getRandomColor()
const color2:rgb=getRandomColor()
console.log(color)
console.log(color2)*/

/*
//UNİON TYPES

let someId:number | string
someId=123
someId="HF_Merciless"

let email:string | null = null

email="Muhammedgnn46@gmail.com"*/

/*
//TYPE GUARDS

type id = number | string

function swapIdTypes(id:id){
    if (typeof id === "number") {
        return parseInt(id.toString())
    }
    else{
        return id.toString()
    }
}
const id1=swapIdTypes(1)
const id2=swapIdTypes("1")

console.log(id1,id2)
*/
