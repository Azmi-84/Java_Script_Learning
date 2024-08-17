/* 
 JS variable have 3 scope:
 => block scope 
 => function scope
 => global scope 
 */

// BLOCK SCOPE

 {
    let x  = 2;
    var y = 3;
 }
//  x and y can NOT be used here and cann't be accessed from outside the block.


//  LOCAL SCOPE and GLOBAL SCOPE

// let carName = "duranto"

function myFunction() {
    //  local scope
    let carName = "hero"
    // console.log(carName);
}
myFunction()

//  global scope
// console.log(carName);

//  FUNCTION SCOPE

/*
    variable decleared with 'let', 'var', 'const' are quite similar when decleared inside a function.
 */

function myFunction_00() {
    let carName = "duranto"
    var bottleName = "bottle"
    const laptopName = "github"
    // console.log(carName, bottleName, laptopName);
}
myFunction_00()

// console.log(carName, bottleName, laptopName);

let carName = "duranto_00"
var bottleName = "bottle_00"
const laptopName = "github_00"
// console.log(carName, bottleName);

function function_00() {
    const github = "azmi"
    function function_01() {
        const course = "java script"
        // console.log(github);
    }
    // console.log(github);
    function_01()
}
function_00()

if (true) {
    const github_00 = "azmi_00"
    if (github_00 === "azmi_00") {
        const course_00 = " java script_00"
        // console.log(github_00 + course_00);
    }
    // console.log(github_00);
}
// console.log(course_00);

// console.log(addingNumber(10));  //Can be accessed before the function declaration
function addingNumber(number) {
    return number + 10;
}

// console.log(addingNumber_00(10));    // ReferenceError: Cannot access 'addingNumber_00' before initialization
const addingNumber_00 = function addingNumber_00(number) {
    return number + 10;
}
// console.log(addingNumber_00(10));

/*
challenge: have a look at the following code and try to predict the output
 */
function complexCode() {
    let a = 5;
    let b = 10;

    function innerFunction() {
        let c = 15;
        let d = a + b + c;
        return d;
    }

    let result = innerFunction();
    return result;
}

console.log(complexCode());