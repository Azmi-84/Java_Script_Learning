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
    // console.log('No user name found');
    }

    //  checking an array

    const arr = [];
    function checkArray(arr) {
        if (arr.length === 0) {
            // console.log('Array is not empty');
        } else {
            // console.log('Array is empty');
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
            // console.log('Object is not empty');
        } else {
            // console.log('Object is empty');
        }
    }
    checkObject(obj); // Object is empty

    // Nulish Coalescing Operator (??): It is used to provide a default value for a variable if it is null or undefined.

    const user = null;
    const userName_00 = user ?? 'Guest';
    // console.log(userName_00); // Guest

    const user_00 = 'John Doe';
    const anotherUser_00 = 'Unknown User';
    const userName_01 = user_00 ?? anotherUser_00;
    // console.log(userName_01); // John Doe

    //  Terinary Operator
    // condition ? expression_1 : expression_2 // if condition is true then expression_1 will be executed otherwise expression_2 will be executed.

    const iceCreamMenu = [
        {
            flavor: 'Vanilla',
            price: 10
        },
        {
            flavor: 'Chocolate',
            price: 15
        },
        {
            flavor: 'Strawberry',
            price: 12
        }
    ];
    
    // Check if the ice cream menu is available and process it
    iceCreamMenu.length > 0 ? (
        console.log('Ice cream menu is available'),
        iceCreamMenu.forEach(item => {
            item.price > 10 
                ? console.log(`Flavor: ${item.flavor}\nPrice: $${item.price}`)
                : item.price === 10 
                    ? console.log(`Flavor: ${item.flavor}\nPrice: $${item.price} (exactly $10)`)
                    : console.log('Price is $10 or less');
        })
    ) : console.log('Ice cream menu is not available');
    