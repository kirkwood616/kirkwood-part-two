let pet = null;

pet = prompt("What is your pet's name?");
while (pet === null || pet === "") {
  pet = prompt("What is your pet's name?");
}

let happiness = 0;
let energy = 0;
let action = null;

for (i = 1; i <= 6; i++) {
  action = prompt("feed, pet, or walk?");
  let act = action.toLowerCase();
  if (act === "walk" && energy === 0) {
    alert("Not enough energy to enjoy a walk.");
  }
  if (act === "walk" && energy > 0) {
    happiness += 2;
    energy--;
  }
  if (act === "pet") {
    happiness++;
  }
  if (act === "feed") {
    energy += 2;
  }
}

console.log("Pet's Name: " + pet);
console.log("Happiness Level: " + happiness);
console.log("Energy Level: " + energy);
console.log(
  pet + " has " + happiness + " happiness and " + energy + " energy."
);
