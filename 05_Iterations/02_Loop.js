//  while loop
let index = 0;
while (index < 5) {
    // console.log(` The value is ${index} `);
    index++;
}

const checkList = [
    { name: 'John', age: 20, status: 'active' },
    { name: 'Doe', age: 30, status: 'inactive' },
    { name: 'Smith', age: 40, status: 'active' },
    { name: 'Alex', age: 50, status: 'inactive' }
];

let i = 0;
while (i < checkList.length) {
    // console.log(` The name is ${checkList[i].name} and age is ${checkList[i].age} `);
    i++;
}

let resultFrequency = {}; // Object to store the frequency of each result
let index_00 = 0;
while (index_00 <= 10) {
    let index_01 = 0;
    while (index_01 < 8) {
        let index_02 = 0;
        while (index_02 < 6) {
            let result = index_00 * index_01 * index_02;
            // If the result already exists in the object, increment its count
            if (resultFrequency[result]) {
                resultFrequency[result]++;
            } else {
                // Otherwise, initialize the count to 1
                resultFrequency[result] = 1;
            }
            index_02++;
        }
        index_01++;
    }
    index_00++;
}

//  Convert the resultFrequency object to an array [result, frequency] pairs
let sortedResult = Object.entries(resultFrequency).sort((a, b) => b[1] - a[1]);
let sortedResult_00 = Object.entries(resultFrequency).sort((a, b) => a[1] - b[1]);

// Output the frequency of each result
for (let result in resultFrequency) {
    // console.log(`Result ${result} appears ${resultFrequency[result]} times`);
}

// Output of the sorted frequencies in ascending order
// console.log('Results sorted from low to high');
sortedResult.forEach(([result, frequency]) => {
    // console.log(`Result ${result} appears ${frequency} times`);
})

// Output of the sorted frequencies in descending order
// console.log('Results sorted from high to low');
sortedResult_00.forEach(([result, frequency]) => {
    // console.log(`Result ${result} appears ${frequency} times`);
})

//  do while loop

let m = 1;

do {
    console.log(`Multiplication Table of ${m} is:`);

    let j = 1;
    do {
        console.log(`${m} * ${j} = ${m * j}`);
        j++;
    } while (j <= 10);

    m++;
    console.log(''); // Adding a blank line for better readability
} while (m <= 10);
