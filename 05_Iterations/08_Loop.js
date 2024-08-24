const number = [1, 2, 3, 4, 5]
const initialValue = 0

// const reducedNumber = number.reduce(
//     (accumulator, currentValue) => {
//         console.log(`acc :- ${accumulator} and currVal :- ${currentValue}`);
//         return accumulator + currentValue
//     }, initialValue
// )

console.log(
    // number.reduce( (accumulator, currentValue) => (accumulator + currentValue), 0 )
);

const shoppingCart = [
    { product: 'Laptop', price: 1000, quantity: 1 },
    { product: 'Mouse', price: 20, quantity: 2 },
    { product: 'Keyboard', price: 50, quantity: 1 }
];

console.log(
    shoppingCart.reduce( (acc, curr) => (acc + (curr.price * curr.quantity)),0  )
);





