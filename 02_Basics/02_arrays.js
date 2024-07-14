// const array_01 = new Array (1, 2, 3, 4, 5, true, false, "azmi-84")
// const array_02 =  [1, 2, 3, 4, 5, 6, 7,  true, false, "azmi-84"]

// function array_03() {
//     return (array_01.push(array_02))
// }

// console.log(array_03()); // returns the length of the array_03

// array_01.push(array_02);
// console.log(array_01);

// const array_04 = array_01.concat(array_02)
// console.log(array_04);

// function array_05() {
    // return ([...array_01, ...array_02])
// }

// console.log(array_05());

// const array_06 = [1, 2, 3, [4, 5], 6, [7, 8, 9, [10, 11, 12, [13, 14], [15, 16, 17], [18, 19, 20]]]];

// function array_07() {
//     return(array_06.flat(Infinity))
// }

// console.log(array_07());

function my_Array_08(input) {
    if (Array.isArray(input)) {
        return "It is an array";
    } else {
        let result = "Converted it into an array and the array is: ";
        let arrayFromInput;

        if (typeof input === 'object' && input !== null) {
            arrayFromInput = [];
            for (let key in input) {
                if (input.hasOwnProperty(key)) {
                    arrayFromInput.push(input[key]);
                }
            }
        } else if (typeof input === 'string') {
            arrayFromInput = input.split('');
        } else {
            arrayFromInput = [input];
        }

        return result + JSON.stringify(arrayFromInput);
    }
}

// Example usage
console.log(my_Array_08([1, 2, 3])); // Outputs: "It is an array"
console.log(my_Array_08("not an array")); // Outputs: "Converted it into an array and the array is: ["n","o","t"," ","a","n"," ","a","r","r","a","y"]"
console.log(my_Array_08({ name: "azmi-84", age: 25 })); // Outputs: "Converted it into an array and the array is: ["azmi-84", 25]"
console.log(my_Array_08(42)); // Outputs: "Converted it into an array and the array is: [42]"
