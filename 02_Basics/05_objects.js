//  another effective code  syntax for making the code clean, it is called destructureing
const another_Syntax = {
    name: "azmi",
    email: "someone@someone.com",
    username: "azmi-84",
    is_Logged_In: true
}

another_Syntax.username
// console.log(another_Syntax.username);

const {username: usrN} = another_Syntax
console.log(usrN);

//  same in react 

// const usrN = ({azmi-84}) =>  {
    
// }
// usrN(azmi = "84")

//  API

// {
//     "name": "azmi",
//     "id": 84,
//     "email": "someone@someone.com"
// }

//  https://jsonformatter.org/
//  https://randomuser.me/api/