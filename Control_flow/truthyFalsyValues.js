//Truthy Values = "0", 'false', " ", [], {}, function(){}
//Falsy Values =  false, 0,-0,BigInt 0n, "",null, undefined, NaN

//Example
const user = " ";
if(user){
    console.log("UserLoggedIn");
}else{
    console.log("USerNotLoggedIn");
}
//It will give the output as UserLoggedIn even if the user is not there because it has truthy value that is " "

//Ternary Operator 

const iceTeaPrice = 400;
iceTeaPrice <200 ? console.log("IceTeaPrice is low") :console.log("IceTeaPrice is High");

