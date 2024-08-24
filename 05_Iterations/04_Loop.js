const object = {
    name: 'Calculator',
    price: '$12',
    availability: 'available',
    warranty: '2 Years',
    brand: 'Casio',
    model: 'fx-991EX Plus'
}

for (const key in object) {
    // console.log(`${key}: ${object[key]}`);
}

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(`${key}: ${element}`);
    }
}