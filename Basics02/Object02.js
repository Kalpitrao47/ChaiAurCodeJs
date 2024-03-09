let obje1 = {
    1:"Kalpit",
    2:"b",
}

let obj2 = {
    1:"Rohan",
    4:"dbjd",
}

let obj3 = {...obje1, ...obj2};
console.log(obj3);// It will overite the value which has same key.If its different then it will be merged.


console.log(Object.keys(obje1));
console.log(Object.values(obje1));
console.log(Object.entries(obje1));

//Destructuring in Objects
const rohan = {
    name:"Rohan",
    age:27,
    email:"rohan@gmail.com",
}

const {name: naaam,age,email} = rohan;
console.log(naaam);  
console.log(age);
console.log(email);    
