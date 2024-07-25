// sigleton
//  const singleton_Object = new Object()
//  console.log(singleton_Object);

//  object constructor
// const object_Constructor = {}
// console.log(object_Constructor);

// declearing a nested object

const { log } = require("console")

const nested_Object = {

    email: "azmi_84@someone.com",

    Name: {
        fullName: {
            first_Name: "azmi",
            last_Name: "84"
        },
        user_Name: {
            user_First_Name: "azmi",
            user_Last_Name: "84"
        }
    }
}

// console.log(nested_Object?.Name?.user_Name?.user_First_Name);
// console.log(nested_Object.Name.user_Name.user_Last_Name);

// combining object

const combining_Object = {

    is_Logged_In: true,

    paragraph_Writing: {
        first_Para: "What is map() in JavaScript",
        second_Para: "What is filter() in JavaScript",
    },
    content_Writing: {
        first_Content: "One of the most popular methods is the .map() method.",
        second_Content: "What is the difference between forEach and map in JavaScript"
    }
}

// const combining_Object_Print = {nested_Object, combining_Object}
// const combining_Object_Print = Object.assign(nested_Object, combining_Object);
// const combining_Object_Print = Object.assign({}, nested_Object, combining_Object);
// const combining_Object_Print = {...nested_Object, ...combining_Object};

// console.log(combining_Object_Print);

const object_Inside_Array = [
    {
        name: "azmi",
        age: null,
        email: "azmi@someone.com"
    },
    {
        name: "azmi",
        age: null,
        email: "azmi@someone.com"
    },
    {
        name: "azmi",
        age: null,
        email: "azmi@someone.com"
    },
    {
        name: "azmi",
        age: null,
        email: "azmi@someone.com"
    },
    {
        name: "azmi",
        age: null,
        email: "azmi@someone.com"
    },
    {
        name: "azmi",
        age: null,
        email: "azmi@someone.com"
    },
    {
        name: "azmi",
        age: null,
        email: "azmi@someone.com"
    },
    {
        name: "azmi",
        age: null,
        email: "azmi@someone.com"
    },
]

// console.log(object_Inside_Array[1].name);
// console.log(object_Inside_Array[2].email);
// console.log(object_Inside_Array[3].age);

// important method

// making into a array

// console.log(Object.keys(combining_Object.content_Writing));
// console.log(Object.keys(combining_Object.content_Writing.first_Content));
// console.log(Object.keys(combining_Object.content_Writing.first_Content).length);

// for values

// console.log(Object.values(combining_Object));
// console.log(Object.values(combining_Object.content_Writing));
// console.log(Object.values(combining_Object.content_Writing.first_Content));

// for entries 

// console.log(Object.entries(combining_Object));
// console.log(Object.entries(combining_Object.content_Writing));
// console.log(Object.entries(combining_Object.content_Writing.second_Content));

// for hasOwnProperty

// console.log(Object.hasOwnProperty(combining_Object, "content_Writing"));
// console.log(Object.hasOwnProperty('is_Logged_In'));