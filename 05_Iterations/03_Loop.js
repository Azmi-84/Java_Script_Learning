let menu = [
    {name:'Calculator', Price: '$12', availability: 'available', Warranty: '2 Years', Brand: 'Casio', Model: 'fx-991EX Plus'},
    {name:'Laptop', Price: '$1200', availability: 'available', Warranty: '1 Year', Brand: 'Dell', Model: 'Inspiron 15 3000'},
    {name:'Smartphone', Price: '$800', availability: 'available', Warranty: '2 Years', Brand: 'Apple', Model: 'iPhone 12 Pro'},
    {name:'Smartwatch', Price: '$400', availability: 'available', Warranty: '1 Year', Brand: 'Samsung', Model: 'Galaxy Watch 3'},
    {name:'Headphones', Price: '$200', availability: 'available', Warranty: '1 Year', Brand: 'Sony', Model: 'WH-1000XM4'},
    {name:'Tablet', Price: '$600', availability: 'available', Warranty: '1 Year', Brand: 'Samsung', Model: 'Galaxy Tab S7'},
    {name:'Camera', Price: '$1000', availability: 'available', Warranty: '2 Years', Brand: 'Canon', Model: 'EOS 90D'},
    {name:'Printer', Price: '$300', availability: 'available', Warranty: '1 Year', Brand: 'HP', Model: 'LaserJet Pro M15w'},
]

for (const element of menu) {
    console.log(`Name: ${element.name}, Price: ${element.Price}, Availability: ${element.availability}, Warranty: ${element.Warranty}, Brand: ${element.Brand}, Model: ${element.Model}`);
}