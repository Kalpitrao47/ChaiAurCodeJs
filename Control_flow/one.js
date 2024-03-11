// <, >, <=, >=, ==, !=, ===, !==

const userLoggedIn = false;
if(userLoggedIn === true){
    console.log("USer authenticated")
}else{
    console.log("user is not authenticated")
}


const personLoggedIn = true;
const personisValidated = false;

if(personLoggedIn && personisValidated === true){  //&& means both the condition must be true
    console.log("Person authenticated")
}else{
    console.log("person is not authenticated")
}


if(userLoggedIn || personLoggedIn){ //  ||means any one condition must be true
    console.log("Person authenticated")
}else{
    console.log("person is not authenticated")
}

