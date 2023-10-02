

// After you have created the other object literals, add the astronautID property to each one.
let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};



// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, dog, waterBear];

// Print out the relevant information about each animal.
function crewReports(name, species, age, mass) {
   for (let i = 0; i < crew.length; i++)
   return(`${name[i]} is a ${species[i]}. They are ${age[i]} years old and ${mass[i]} kilograms. Their ID is ${astronautID[i]}`);
   }

// Start an animal race!
function fitnessTest(candidates) {
   let results = [], numSteps, turns;
   for (let i = 0; i < candidates.length; i++) {
      turns = 0;
      numSteps = 0; 
      while(numSteps < 20) {
         numSteps += candidates[i].move();
         turns++;
      }
      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}
