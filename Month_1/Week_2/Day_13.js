/*
//ASYNC/AWAIT

function walkDog(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isDogWalked=0
            if (isDogWalked) {
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
        },2000)
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
                reject ("Trash could not be taken. ")
            }
        },500)
    })
}
async function doChores(){
    try {
        const walkDogResult = await walkDog().catch(err => console.error(err));
        if (walkDogResult) console.log(walkDogResult);

        const cleanRoomResult = await cleanRoom().catch(err => console.error(err));
        if (cleanRoomResult) console.log(cleanRoomResult);

        const takeTrashResult = await takeTrash().catch(err => console.error(err));
        if (takeTrashResult) console.log(takeTrashResult);

        if (walkDogResult || cleanRoomResult || takeTrashResult === false){
            console.error("Not all the chores were completed.");
        }
            else {
            console.log("All chores completed.");
        }
    }
    catch (error) {
        console.error(error)
    }
}
doChores()*/

/*
//JSON

const names =["hf merciless","HF_Merciless","hf_merciless","HF_Merciles"]

const person={
    "name": "HF_Merciless",
    "age": 20,
    "employed": true,
    "hobbies": ["gaming","coding","riding"]
}
const people=[{
    "name": "HF_Merciless",
    "age": 20,
    "employed": true
},
    {
        "name": "HF_Merciles",
        "age": 22,
        "employed": true},
    {
        "name": "hf_merciless",
        "age": 25,
        "employed": false
    }]

const jsonString=JSON.stringify(names)
const personString=JSON.stringify(person)
const peopleString=JSON.stringify(people)

console.log(jsonString)
console.log(personString)
console.log(peopleString)


const jsonnames='["hf merciless","HF_Merciless","hf_merciless","HF_Merciles"]'
const jsonperson='{"name": "HF_Merciless", "age": 20, "employed": true, "hobbies": ["gaming","coding","riding"]}'
const jsonpeople='[{"name": "HF_Merciless", "age": 20, "employed": true}, {"name": "HF_Merciles", "age": 22, "employed": true}, {"name": "hf_merciless", "age": 25, "employed": false}]'

const parsedData=JSON.parse(jsonpeople)
const parsedData2=JSON.parse(jsonnames)
const parsedData3=JSON.parse(jsonperson)

console.log(parsedData)
console.log(parsedData2)
console.log(parsedData3)


const fs = require("fs");

const value = JSON.parse(fs.readFileSync("Names.json", "utf-8"));
console.log(value);
*/
