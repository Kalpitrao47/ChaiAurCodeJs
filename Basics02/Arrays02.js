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
