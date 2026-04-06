/*
//ARRAYS OF OBJECTS

const people = [
    {name: 'John', age: 20, salary: 2000},
    {name: 'Jane', age: 25, salary: 3000},
    {name: 'Bob', age: 30, salary: 5000}
]
people.push({name: 'Sally', age: 22})
people.pop()
//people.shift()
people.slice(0,1,2)
console.log(people)

people.forEach(person => console.log(person.age))

const names=people.map(person => person.name)
const ages=people.map(person => person.age)

console.log(names)
console.log(ages)

const youngOnes=people.filter(person => person.age<=25)
console.log(youngOnes)

const totalSalary=people.reduce((total,person) => total+person.salary,0)
console.log(totalSalary)

const maxSalary=people.reduce((max,person) => person.salary > max.salary ?person:max)

console.log(maxSalary)
*/
