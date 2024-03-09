const marvel_heroes = ["batman","catman","mouseman"];
const indian_heroes = ["Ssdgj","fygyggj","ftftyf","rfhj"];

const newHeroes = marvel_heroes.concat(indian_heroes);
console.log("newHeroes",newHeroes);

//Spread Operator

const allNewHeroes = [...marvel_heroes,...indian_heroes];
console.log(allNewHeroes);

//Array Flat 

const FlatHeroes = [1,2,3,4,5,[6,7],8,9,[10,11,12,[,13,14,15]]];
console.log(FlatHeroes.flat(Infinity));

//Convert to Array  
console.log(Array.isArray("KalpitRaorane"));  

//Array.from
console.log(Array.from("KalpitRaorane"));
console.log(Array.from({
    name:"KalpitRaorane",
    email:"kalpitraane@gmail.com",
}));   

//Array.of
//The Array.of() method creates a new array from any number of arguments.
// The Array.of() method can take any type of arguments.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
