function sum(a,b){
    return a+b;
}
 
const value = sum(20,39);
console.log(value)

function calculateArthmetic(a,b,type){
    if(type == "sum"){
        return a+b
    }
    if(type == "minus"){
        return a-b
    }
}

const value1 = calculateArthmetic(20,30,"minus");
console.log(value1)


function greet(){
    console.log("Hello");
}
setTimeout(greet , 3 *1000 );