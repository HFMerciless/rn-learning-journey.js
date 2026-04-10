/*
//CALLBACK HELL

function task1(callback){
    setTimeout(()=>{
        console.log("Task 1 completed.")
        callback()
    },2000)
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task 2 completed.")
        callback()
    },1000)
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task 3 completed.")
        callback()
    },3000)
}
function task4(callback){
    setTimeout(()=>{
        console.log("Task 4 completed.")
        callback()
    },1500)
}
function task5(callback){
    setTimeout(()=>{
        console.log("Task 5 completed.")
        callback()
    },500)
}
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    console.log("All tasks completed.")
                })
            })
        })
    })
})
*/

/*
//PROMİSES
function walkDog(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isDogWalked=1
            if(isDogWalked) {
                resolve("Walking dog.")
            }
            else {
                reject ("Dog could not be walked. ")
            }
            },2000)
        })
}


function cleanRoom(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isRoomCleaned=1
            if (isRoomCleaned) {
                resolve("Cleaning room.")
            }
            else {
                reject ("Room could not be cleaned. ")
            }
            },6000)
        })
    }

function takeTrash(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isTrashTaken=1
            if (isTrashTaken) {
                resolve("Dumping trash.")
            }
            else {
                reject("Trash could not be taken.")}
            },500)
        })
    }
walkDog().then(value => {console.log(value);return cleanRoom()})
         .then(value => {console.log(value);return takeTrash()})
         .then(value =>{console.log(value);console.log("All chores completed.")})
         .catch(error => console.error(error))*/

