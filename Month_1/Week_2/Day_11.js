/*
//ES6 MODULE

import {pi, getCircumference, getArea, getVolume} from './ES6_Module.js'


const circumference = getCircumference(10)
const area = getArea(10)
const volume = getVolume(10)

console.log(pi)
console.log(circumference.toFixed(2))
console.log(area.toFixed(2))
console.log(volume.toFixed(2))
*/

/*
//ASYNCHRONOUS

function func(callback){
    setTimeout(() => {console.log("Hello");
                      callback()},3000)
}
function func2(){
    console.log("Hello2")
    console.log("Hello3")
    console.log("Hello4")
}
func(func2)*/

/*
//ERROR OBJECT

try {
    console.log("x")
}
catch (error) {
    console.error(error)
}
finally {
    console.log("This will always run.")
}
console.log("You are safe.")


try {
    const divident=10
    const divisor=0

    if (divisor===0) {
        throw new Error ("Cannot divide by zero.")
    }
    const result=divident/divisor
    console.log(result)
}
catch (error) {
    console.log(error)
}
console.log("You are safe.")
*/

