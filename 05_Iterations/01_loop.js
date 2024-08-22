//  for loop

for (let index = 0; index <= 10; index++) {
    const element = index
    if (index % 2 === 0) {
        // console.log(element);
    }
    // console.log(element);
}

// for (let index = 0; index <= 10; index++) {
//     // console.log(`Values of the first array: ${index}`);
//     for (let index_00 = 0; index_00 < 8; index_00++) {
//         // console.log(`Values of the second array: ${index_00} in the first array: ${index}`);
//         console.log(index + '*' + index_00 + '=' + index * index_00);
//         for (let index_01 = 0; index_01 < 6; index_01++) {
//             // console.log(`Values of the third array: ${index_01} in the second array: ${index_00} in the first array: ${index}`);
//             console.log(index + '*' + index_00 + '*' + index_01 + '=' + index * index_00 * index_01);
            
//         }
//     }
// }



let resultFrequency = {}; // Object to store the frequency of each result

for (let index = 0; index <= 10; index++) {
    for (let index_00 = 0; index_00 < 8; index_00++) {
        for (let index_01 = 0; index_01 < 6; index_01++) {
            let result = index * index_00 * index_01;
            
            // If the result already exists in the object, increment its count
            if (resultFrequency[result]) {
                resultFrequency[result]++;
            } else {
                // Otherwise, initialize the count to 1
                resultFrequency[result] = 1;
            }
        }
    }
}

//  Convert the resultFrequency object to an array [result, frequency] pairs
let sortedResult = Object.entries(resultFrequency).sort((a, b) => b[1] - a[1]);
let sortedResult_00 = Object.entries(resultFrequency).sort((a, b) => a[1] - b[1]);

// Output the frequency of each result
for (let result in resultFrequency) {
    console.log(`Result ${result} appears ${resultFrequency[result]} times`);
}

// Output of the sorted frequencies in ascending order
console.log('Results sorted from low to high');
sortedResult.forEach(([result, frequency]) => {
    console.log(`Result ${result} appears ${frequency} times`);
})

// Output of the sorted frequencies in descending order
console.log('Results sorted from high to low');
sortedResult_00.forEach(([result, frequency]) => {
    console.log(`Result ${result} appears ${frequency} times`);
})


//  Break and Continue

for (let index = 0; index <= 10; index++) {
    if (index % 2 === 0) {
        continue;
    }
    console.log(index);
}

for (let index = 0; index <= 10; index++) {
    if (index % 2 === 0) {
        break;
    }
    console.log(index);
}