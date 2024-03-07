console.log("Hello World");
let number = 5;
number = "Hello"
console.log(number)

// variables - let,var,const
// const can be used if the variable value is to be not changed, it support only one value.

let firstname = "Sriram";
let age = 21
console.log("His first name is " + firstname + " and his age is " + age)

let ismarried = true;

if(ismarried == false){
    console.log("He is married")
}
else{
    console.log("He is not married")
}

// if(ismarried == true){
//     console.log("He is not married")
// }

let number1 = 0
for(let i = 1; i<=5; i++){
    number1 = number1 + i;
}
console.log(number1)