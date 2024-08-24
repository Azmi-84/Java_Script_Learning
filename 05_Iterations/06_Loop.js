const menu = [
    { name: 'ball', price: 100 },
    { name: 'bat', price: 200 },
    { name: 'gloves', price: 50 },
    { name: 'helmet', price: 150 },
    { name: 'shoes', price: 300 }
]

const values = menu.forEach((items) => {
    // console.log(`${items.name} - $${items.price}`);
    // return items.price > 100;
})
// console.log(values); // undefined

// The forEach() method doesn't return anything. It simply iterates over the array and executes the callback function for each element.

const value = menu.filter((items) => {
    return items.price > 100;
} )
// console.log(value);

const value_00 = menu.filter((items) => items.price > 100);
// console.log(value_00);

// The filter() method returns a new array with the elements that pass the condition specified in the callback function.

const value_01 = [] 

menu.forEach((items) => {
    if (items.price > 100) {
        value_01.push(items);
    }
})
// console.log(value_01);

// The forEach() method can be used to achieve the same result as the filter() method. However, the filter() method is more concise and easier to read. It also returns a new array, while the forEach() method doesn't return anything.

const bookList = [
    {title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', edition: 1912, publisher: 'Little, Brown and Company'},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', edition: 1960, publisher: 'J.B. Lippincott & Co.'},
    {title: '1984', author: 'George Orwell', genre: 'Dystopian', edition: 1949, publisher: 'Secker & Warburg'},
    {title: 'Animal Farm', author: 'George Orwell', genre: 'Political satire', edition: 1945, publisher: 'Secker & Warburg'},
    {title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', edition: 1932, publisher: 'Chatto & Windus'},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction', edition: 1925, publisher: 'Charles Scribner\'s Sons'},
    {title: 'The Grapes of Wrath', author: 'John Steinbeck', genre: 'Fiction', edition: 1939, publisher: 'The Viking Press'}
]

const userPreference = bookList.filter( (user) => {
    return user.author === 'George Orwell' && user.edition === 1945
} )

console.log(userPreference);
