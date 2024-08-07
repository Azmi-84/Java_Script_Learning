function my_Array(input) {
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
// console.log(my_Array([1, 2, 3])); // Outputs: "It is an array"
// console.log(my_Array("not an array")); // Outputs: "Converted it into an array and the array is: ["n","o","t"," ","a","n"," ","a","r","r","a","y"]"
// console.log(my_Array({ name: "azmi-84", age: 25 })); // Outputs: "Converted it into an array and the array is: ["azmi-84", 25]"
// console.log(my_Array(42)); // Outputs: "Converted it into an array and the array is: [42]"

//  for adding mutiple values, the result is given in a single array

function addinginfinitevalue(...values) {
    return values.reduce((sum, currentValue) => sum + currentValue, 0);
}

// console.log(addinginfinitevalue(20, 40, 60, 80, 100, 120)); // Output: 420
// 5.08 =>20

const user = {
    username: "azmi",
    ID: 84,
    email: "azmi_84@github.com"
}
function handleObject(anyObject) {
    // console.log(`Username is ${anyObject.username} and ID is ${anyObject.ID} and email is ${anyObject.email}`);
}
handleObject(user)

const array_00 = [123, 456, 789, 120]

function returnArray(array_00){
    return array_00[2]
}
console.log(returnArray(array_00));
