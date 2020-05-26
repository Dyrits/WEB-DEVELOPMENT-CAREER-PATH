const doorImage1 = document.querySelector("#door1");
const doorImage2 = document.querySelector("#door2");
const doorImage3 = document.querySelector("#door3");
const startButton = document.querySelector("#start");
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let doorPaths = [botDoorPath, beachDoorPath, spaceDoorPath]
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1)
    doorImage1.style.cursor = "not-allowed";
  }
}

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
    doorImage2.style.cursor = "not-allowed";
  }
}

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
    doorImage3.style.cursor = "not-allowed";
  }
}

startButton.onclick = () => {
  if (!currentlyPlaying) { startRound(); }
}

const startRound = () => {
  doorImage1.src = doorImage2.src = doorImage3.src = closedDoorPath;
  doorImage1.style.cursor = doorImage2.style.cursor = doorImage3.style.cursor = "pointer";
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  doorPaths = [botDoorPath, beachDoorPath, spaceDoorPath]
  randomDoorsGenerator();
}

const randomDoorsGenerator = () => {
  let randomDoor1 = Math.floor(Math.random() * numClosedDoors)
  openDoor1 = doorPaths.splice(randomDoor1, 1)[0]
  let randomDoor2 = Math.floor(Math.random() * (numClosedDoors - 1))
  openDoor2 = doorPaths.splice(randomDoor2, 1)[0];
  openDoor3 = doorPaths[0]
};

const isBot = (door) => { return door.src === botDoorPath; }
const isClicked = (door) => { return !(door.src === closedDoorPath); }

const playDoor = (door) => {
  numClosedDoors--;
  if (!numClosedDoors) { gameOver("win"); }
  else if (isBot(door)) { gameOver() }
}

const gameOver = (status) => {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?"
  } else {
    startButton.innerHTML = "Game over! Play again?";
    doorImage1.style.cursor = doorImage2.style.cursor = doorImage3.style.cursor = "not-allowed";
  }
  currentlyPlaying = false;
}

startRound()