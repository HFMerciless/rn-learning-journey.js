/*
//NESTED OBJECTS

const person ={
    name:"HF",
    surname:"Merciless",
    age :20,
    job:"Developer",
    hobies :["Riding","Coding","Gaming"],
    address:{
        street :"123 Main St",
        city :"New York",
        country:"USA"
    }
}

for (const property in person.address) {
    console.log(person.address[property])
}
console.log(person.name)
console.log(person.address)
console.log(person.hobies)

class Person{
    constructor (name,surname, ...address){
        this.name=name
        this.surname=surname
        this.address=new Adress(...address)
    }
}
class Adress{
    constructor(street,city,country){
        this.street=street
        this.city=city
        this.country=country
    }
}
const person=new Person("HF","Merciless","123 Main St","New York","USA")
const person2=new Person("HF_","Merciless","123 Main St","New York" ,"USA")

console.log(person2.surname)
*/


