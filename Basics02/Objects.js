//Object Literals
const JsUser = {
    name:"Kalpit",
    "full name":"Kalpit Pramod Raorane",
    age:27,
    gender:"Male",
    email:"kalpitraorane46@gmail.com",
    isLoggedin:false,
}

console.log(JsUser.name)//preffered way to access objects
console.log(JsUser["name"]); //preffered way to access objects which has key with a string
//Now how can you access full name using .full name eg:
// console.log(JsUser.full name);//will throw an error

console.log(JsUser["full name"]);  //thats how we can accees the full name. Check out the object of JsUser



JsUser.greeting = function(){
    console.log("Hello this is Greeting from js ");
}

console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello this is ${this.name}`);
}

console.log(JsUser.greeting2());