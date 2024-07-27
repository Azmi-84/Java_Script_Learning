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
console.log(my_Array([1, 2, 3])); // Outputs: "It is an array"
console.log(my_Array("not an array")); // Outputs: "Converted it into an array and the array is: ["n","o","t"," ","a","n"," ","a","r","r","a","y"]"
console.log(my_Array({ name: "azmi-84", age: 25 })); // Outputs: "Converted it into an array and the array is: ["azmi-84", 25]"
console.log(my_Array(42)); // Outputs: "Converted it into an array and the array is: [42]"