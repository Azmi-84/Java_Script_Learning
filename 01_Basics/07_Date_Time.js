// Date

let my_Date = new Date()

// console.log(my_Date);
// console.log(my_Date.getMilliseconds());


let my_Created_Date = new Date(2024, 0, 12)
let my_Created_Date_01 = new Date(1980, 0, 12, 4, 2, 5)
let my_Created_Date_02 = new Date("2024-01-12")
// console.log(my_Created_Date);
// console.log(my_Created_Date.toDateString());
// console.log(my_Created_Date_01);
// console.log(my_Created_Date_01.toLocaleString());
// console.log(my_Created_Date_02);
// console.log(my_Created_Date_02.toDateString());
// console.log(my_Created_Date_02.toLocaleDateString());

let my_Time_Stamp = Date.now()
// console.log(my_Time_Stamp);
// console.log(my_Created_Date.getTime());

// console.log(my_Time_Stamp === my_Created_Date.getTime());
// console.log(my_Time_Stamp >= my_Created_Date.getTime());
// console.log(my_Time_Stamp <= my_Created_Date.getTime());

// console.log(Math.floor(((((my_Time_Stamp/1000)/60)/60)/24)/365));

function my_Time_Stamp_toYear() {
    return Math.floor(((((my_Time_Stamp/1000)/60)/60)/24)/365);
}
// console.log(my_Time_Stamp_toYear());

function my_Created_Date_01_toYear() {
    return Math.floor((((((my_Created_Date_01.getTime())/1000)/60)/60)/24)/365);
}
// console.log(my_Created_Date_01_toYear());

function compare_Date() {
    if (my_Time_Stamp_toYear() === my_Created_Date_01_toYear()) {
        return "Equal";
    } else if (my_Time_Stamp_toYear() > my_Created_Date_01_toYear()) {
        return "Greater";
    } else {
        return "Less";
    }
}

console.log(compare_Date());
