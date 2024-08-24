const gameItems = ['ball', 'bat', 'gloves', 'helmet', 'shoes'];

gameItems.forEach(element => {
    // console.log(element);
});

gameItems.forEach((items, index, arr) => {
    // console.log(`Index: ${index} - ${items} and also total array is - ${arr}`);
})

const gameItems_00 = [
    { name: 'ball', price: 100 },
    { name: 'bat', price: 200 },
    { name: 'gloves', price: 50 },
    { name: 'helmet', price: 150 },
    { name: 'shoes', price: 300 }
]

gameItems_00.forEach((items, index, arr) => {
    // console.log(`Index: ${index} - ${items.name} and also total array is - ${arr}`);
    // console.log(items, index, arr);
    console.log(`${items.name} - $${items.price}`);
})
