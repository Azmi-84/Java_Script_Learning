// There are basically two types of data 
// Primitive and Reference(Non-primitive)

// Primive are 7 types: String, Number, Boolean, null, undefinied, Symbol, BigInt

const score = 100
const user_Email = false
const num = "100"
const temp = null
let username;
const user_Name = undefined

const id = Symbol("123")
const another_Id = Symbol("123")

console.log(id === another_Id);

const big_Number = 98487364111111111122222222222222222222222224657777777777777474665746575647873261n

// Reference are like: Array, Objects, Functions

const array = ["Azmi-84"];

let Objects = {
    
    name: "Azmi-84",
    age: 19,

}

const my_Funtion = function(){
    console.log("Assalamualikum");
}

console.log( typeof score);
console.log( typeof user_Email);
console.log( typeof num);
console.log( typeof temp);
console.log( typeof user_Name);
// console.log( typeof username);
console.log( typeof id);
console.log( typeof another_Id);
console.log( typeof big_Number);
console.log( typeof array);
// console.log( typeof Objects);
console.log( typeof my_Funtion);
