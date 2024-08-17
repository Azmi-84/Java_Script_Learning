/*
    Arrow functions are a more concise way to write function expressions - they do not have their own this value.
*/

// Example 1
const user = {
    name: 'John',
    age: 30,

    welcomeMessage: function() {
        console.log(`Hello, ${this.name}`);
        console.log(this);
        
    }
};
// user.welcomeMessage(); // Hello, John
user.name = 'Jane';
// user.welcomeMessage(); // Hello, Jane
// console.log(this);

function thisfunction() {
    console.log(this);
}
// thisfunction();

const arrow_Function = () => {
    console.log(this);
}
// arrow_Function();

const addTwoStrings = (str1, str2) => {
    return str1 + str2;
}
// console.log(addTwoStrings('Hello', ' World!'));

//  Implicit return
const addTwoStrings_00 = (str1, str2) => str1 + str2;
// console.log(addTwoStrings_00('Hello', ' World!'));

//  return object
const returnObject = () => ({key: 'value'});
// console.log(returnObject());

const array_00 = [1, 2, 3, 4, 5];
const array_01 = array_00.map((num) => num * 2); //   this is a callback function that is passed to the map method of the array 
console.log(array_01);

const array_02 = array_00.map((num) => {
    return num * 2;
});
console.log(array_02);

//  another method
const array_03 = array_02.reverse();
console.log(array_03);

//  another method
const array_04 = array_03.filter((num) => num > 5);
console.log(array_04);

//  another method
const array_05 = array_04.reduce((acc, num) => acc + num, 0);
console.log(array_05);
//  0 is the initial value of acc. If not provided, the first element of the array is used as the initial value of acc. also this is a callback function that is passed to the reduce method of the array and it takes two arguments, the accumulator and the current element of the array
