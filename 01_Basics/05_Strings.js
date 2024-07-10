// let string_Data = "Assalamualikum"
// let number_Data = 34

// let combination = string_Data + number_Data
// let combination =  number_Data + string_Data 

// console.log(typeof combination);
// type of data string.


// console.log(combination);

// string interpolation 
// console.log(`${string_Data} ,this is string type, and ${number_Data} ,this is number type data.`);

// string decleration 

// const new_String_Data = new String('Assalamualikum, How are you?')

// console.log(new_String_Data);

// console.log(typeof string_Data);

// console.log(typeof new_String_Data);

// console.log(new_String_Data[14]);
// console.log(new_String_Data.__proto__);

// console.log(new_String_Data.length);
// console.log(new_String_Data.toUpperCase());

// console.log(new_String_Data.charAt(15));
// console.log(new_String_Data.charAt(14));

// console.log(new_String_Data.indexOf('H'));

// const new_String_Data_Slice_Bysubsting = new_String_Data.substring(1, 13)

// console.log(new_String_Data_Slice_Bysubsting);

// the 13 no. of string is m but this is not included here.

// const new_String_Data_Slice = new_String_Data.slice(-5, 2)

// the interesting part here is that here we can give negative value also.

// console.log(new_String_Data_Slice);

// const trim_Function = "          azmi-84    "
// console.log(trim_Function);
// console.log(trim_Function.trim());

// const url_Replace = "https://humble-space-train-r4g5xj9px9qr26r9.github.dev/"

// console.log(url_Replace.replace('.dev/', '.com'))

// const url_Checking_String = "https://humble-space-train-r4g5xj9px9qr26r9.github.dev/"

// // checking whether a string is present in the string or not

// console.log(url_Checking_String.includes("dev"))
// console.log(url_Checking_String.includes("Azmi"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~anchor method~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// this method do a string representing a "name" value to put into the generated <a name="..."> start tag.

// The code below creates an HTML string and then replaces the document's body with it.

// document.body.innerHTML = new_String_Data.anchor("anchor method");~

// <a name="anchor method">Assalamualikum, How are you?</a>

// this method is no longer using nowadays, cause here 'name' is no longer a valid attribute of "a" tag.~

// Instead of using anchor() and creating HTML text directly, you should use DOM APIs such as document.createElement(). 

// const new_String_Data = new String('Assalamualikum, How are you?');
// const html_Element = document.createElement("a")

// html_Element.innerText = new_String_Data;
// document.body.appendChild(html_Element);


// at method

const at_Method = "Azmi-84"

let index = 5;

console.log(`The index ${5} returns the character `);