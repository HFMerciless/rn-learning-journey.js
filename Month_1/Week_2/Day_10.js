/*//CLOSURES

function outer(){
    let name = "HF_Merciless";
    function inner(){
        console.log(name);
    }
    inner()
}

outer()


function createCounter(){
    let count = 0

    function increment(){
        count++
        console.log("Count increased to:", count)
    }
    function getCount(){
        return count
    }
return {increment, getCount}
}
const counter = createCounter()

counter.increment()
counter.increment()

console.log(counter.getCount())


function createScoreKeeper(){
    let score =0

    function increaseScore(points){
        score+=points
        console.log(`+${points} points`)
    }
    function decreaseScore(points){
        score-=points
        console.log(`-${points} points`)
    }
    function getScore(){
        return score
    }
return {increaseScore, decreaseScore, getScore}
}
const Scores = createScoreKeeper()

Scores.increaseScore(10)
Scores.increaseScore(5)
Scores.decreaseScore(2)

console.log(Scores.getScore())*/

/*
//TİMEOUT FUNCTION

function sayHello(){
    console.log("Hello")
}
setTimeout(sayHello,1000)


const timer=setTimeout(() =>console.log("Hello"),1000)

clearTimeout(timer)
*/

