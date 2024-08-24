const bookList = [
    {title: 'The Catcher in the Rye', author: 'J.D. Salinger', alreadyRead: false},
    {title: 'Gulliver’s Travels', author: 'Jonathan Swift', alreadyRead: true},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', alreadyRead: true},
];

// First map: Modify the alreadyRead property by converting it to a number (1 for true, 0 for false)
const modifiedList = bookList.map(list => {
    return {
        ...list, // Spread the original object properties
        alreadyRead: list.alreadyRead ? 1 : 0 // Convert true/false to 1/0
    };
});

// Second map: Append the appropriate string based on the modified alreadyRead value
const checkList = modifiedList.map(list => {
    if (list.alreadyRead === 1) {
        return list.title + '-azmi-84';
    } else {
        return list.title + '-azmi';
    }
});

console.log(checkList);
