//objects

const users = {
    firstname : "Sriram",
    gender : "male"
}

console.log(users["firstname"])

//Array of objects

const users1 = [{
    firstname : 'Sai',
    gender : "male"
},{
    firstname : 'Sravya',
    gender:'female'
},{
    firstname: 'Eswar',
    gender:'male'
}]

for(let i =0; i<users1.length;i++){
    if(users1[i]["gender"] == "male"){
        console.log(users1[i]['firstname'])
    }
}