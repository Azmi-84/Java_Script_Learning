// singleton
// objects constructor

// objects literals
// const object_00 = {
//     name: "azmi-84",
//     age: 12,
//     email: "azmi-84@google.com",
//     password: [12, "azmi", 84],
//     is_Logged_In: false,
//     "Date": ["2023-22-12"]
// }

// console.log(object_00.password);
// console.log(object_00["email"]);
// console.log(object_00["password"]);
// console.log(object_00["Date"]);

//  defining a symbol into an object

const Symbol_00 = Symbol("azmi-84")

// console.log([Symbol_00]);
// console.log(typeof Symbol_00);

const object_01 = {
    name: "azmi-84",
    age: 12,
    email: "azmi-84@github.com",
    [Symbol_00]: "azmi-84@google.com"
}

// console.log(object_01);
// console.log(typeof [Symbol_00]);

// object_01["email"] = "azmi-84@microsoft.com"
// console.log(object_01);

// Object.freeze(object_01)
// object_01["email"] = "azmi-84@vscode.com"
// console.log(object_01);

// object_01.greeting = function () {
//     console.log("Assalamualikum wa rahmatullah hi wa barakatuh");
// }

// console.log(object_01.greeting);
// console.log(object_01.greeting());

object_01.greeting_00 = function () {
    console.log(`Assalamualikum wa rahmatullah hi wa barakatuh, ${this.name}. Your age is ${this.age}`);
}
console.log(object_01.greeting_00);
console.log(object_01.greeting_00());