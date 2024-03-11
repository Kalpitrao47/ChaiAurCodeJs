function abc(){
    console.log("DB connected")
}
abc();


//IIFE(Immediately Invoked Function Expression)
// Scope: The regular function abc is given a name and can be called multiple times from different parts of your code. The IIFE xyz is usually used when you want to create a temporary scope for the variables inside the function without polluting the global scope. The variables defined inside an IIFE are not accessible from outside.

// In summary, the primary difference lies in the execution and scoping behavior. The IIFE is often used when you want to create a private scope for variables and execute a block of code immediately without the need for later calls. Regular functions are more versatile and can be called at different points in your code.
(function xyz(){
    console.log("DB conected xyz")
})();

( () => {
    console.log("Db connected fgh using arrow function")
})();



//Pass Arguments to IIFE Function
( (name) =>{
    console.log(`Hello This is ${name}`)
})("Kalpit")