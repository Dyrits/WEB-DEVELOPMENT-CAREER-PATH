let raceNumber = Math.floor(Math.random() * 1000);

let runnerEarlyReg = false;
let runnerAge = 18;

if (runnerEarlyReg && runnerAge > 17) {
  raceNumber += 1000;
}

if (runnerEarlyReg && runnerAge > 17) {
  console.log(`Your race number is ${raceNumber}. The race will start at 9:30 AM.`);
} else if (!runnerEarlyReg && runnerAge > 17) {
  console.log(`Late adults, like you, run at 11:00 AM. You have the number ${raceNumber}.`);
} else {
  console.log(`Youth registrants run at 12:30 PM! Your number is ${raceNumber}.`)
}