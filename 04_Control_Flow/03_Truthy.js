// const userName = 'John Doe'; // Hello, John Doe
// const userName = ''; // No user name found
// const userName = []; // Hello, []
// const userName = ![] // No user name found
// const userName = {};  // Hello, [object Object]
// const userName = 0; // No user name found
// const userName = !0; // No user name found
// const userName = null; // No user name found
// const userName = undefined; // No user name found

// Falsy values
// 0, -0, BigInt 0n, NaN, null, undefined, false, ''

// Truthy values
// '0', ' ', [], {}, function() {}, true, 1, -1, Infinity, -Infinity, 'false', 'null', 'undefined', 'NaN', 'true', '1', '-1', 'Infinity', '-Infinity'

const userName = NaN; // No user name found
if (userName) {
    console.log('Hello, ' + userName);
    } else {  
    console.log('No user name found');
    }

    //  checking an array

    const arr = [];
    function checkArray(arr) {
        if (arr.length === 0) {
            console.log('Array is not empty');
        } else {
            console.log('Array is empty');
        }
    }
    checkArray(arr); // Array is empty

    // function checkArray(arr) {
    //     if (arr.length) {
    //         console.log('Array is not empty');
    //     } else {
    //         console.log('Array is empty');
    //     }
    // }
    // checkArray(arr); // Array is empty

    //  checking an Object

    const obj = {};

    function checkObject(obj) {
        if (Object.keys(obj).length === 0) {
            console.log('Object is not empty');
        } else {
            console.log('Object is empty');
        }
    }
    checkObject(obj); // Object is empty