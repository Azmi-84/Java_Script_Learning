const menuItems = [
    { id: 1, name: 'Tteokbokki' },
    { id: 2, name: 'Cheese burger' },
    { id: 3, name: 'Kimchi' },
    { id: 4, name: 'Donuts' },
    { id: 5, name: 'Kimchi burger' },
    { id: 6, name: 'Pizza' },
]

const order = {
    tableNum: 3,
    orderNum: 5,
    itemId: 3,
}

function getMenuName(menuItems, order) {
    let result = '';
    switch (order.itemId) {
        case 1:
            result = menuItems[0].name;
            break;
        case 2:
            result = menuItems[1].name;
            break;
        case 3:
            result = menuItems[2].name;
            break;
        case 4:
            result = menuItems[3].name;
            break;
        case 5:
            result = menuItems[4].name;
            break;
        case 6:
            result = menuItems[5].name;
            break;
        default:
            result = 'There is no such menu.';
            break;
    }
    return result;
}

// we can also use find method to find the item and will get the same result

function getMenuName(menuItems, order) {
    const menuItem = menuItems.find(item => item.id === order.itemId);
    return menuItem ? menuItem.name : 'There is no such menu.';
}

// console.log(getMenuName(menuItems, order)); // Kimchi

//  now another example and al bit complex

const data = {
    tableNum: 3,
    orderNum: 5,
    itemId: 3,
};

const dataDescription = [
    { id: 1, name: 'Tteokbokki', tableNum: 1, orderNum: 7, itemId: 1 },
    { id: 2, name: 'Cheese burger', tableNum: 2, orderNum: 3, itemId: 2 },
    { id: 3, name: 'Kimchi', tableNum: 3, orderNum: 5, itemId: 3 },
    { id: 4, name: 'Donuts', tableNum: 4, orderNum: 10, itemId: 4 },
    { id: 5, name: 'Kimchi burger', tableNum: 5, orderNum: 8, itemId: 5 },
    { id: 6, name: 'Pizza', tableNum: 6, orderNum: 2, itemId: 6 },
];

function getDataName(data, dataDescription) {
    //  Find the dataDescription that matches the data
    const description = dataDescription.find(
        item => item.tableNum === data.tableNum && item.orderNum === data.orderNum && item.itemId === data.itemId
    );
    return description ? `Table ${description.tableNum} - Order ${description.orderNum} - ${description.name}` : 'There is no such data.';
}

console.log(getDataName(data, dataDescription)); // Table 3 - Order 5 - Kimchi
