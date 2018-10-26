// Rover Object Goes Here
// ======================

//Direction could be: ["N", "E", "S", "W"]
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  position:[this.x, this.y],
  travelLog:[]
};

var board = [
  [rover, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
]

console.log("Direction is: " + rover.direction);

table = document.getElementById("table");

for (var i = 1; i < table.rows.length; i++){
  for (var j = 0; j < table.rows[i].cells.length; j++){
    table.rows[i].cells[j].innerHTML = array[i-1][j];
  }
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  if(rover.direction === "N") {
    rover.direction = "W";
  } else if (rover.direction === "W") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "E";
  } else {
    rover.direction === "N";
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  if(rover.direction === "N") {
    rover.direction = "E";
  } else if (rover.direction === "E") {
    rover.direction = "S";
  } else if (rover.direction === "S") {
    rover.direction = "W";
  } else {
    rover.direction === "N";
  }  
}

function moveForward(rover){
  console.log("moveForward was called");
  if(rover.direction === "N" || rover.position.x>0) {
    [rover.position.x--][rover.position.y];
  } else if (rover.direction === "W" || rover.position.y>0) {
    [rover.position.x][rover.position.y--];
  } else if (rover.direction === "S" || rover.position.x<9) {
    [rover.position.x++][rover.position.y];
  } else if (rover.direction === "E" || rover.position.y<9) {
    [rover.position.x][rover.position.y++];
  } else {
    rover.direction === "N";
  }
  rover.travelLog.push("(" + rover.position.x + ", " + rover.position.y + ")");
}

function moveBackward(rover){
  console.log("moveBackward was called");
  if(rover.direction === "N" || rover.position.x<9) {
    [rover.position.x++][rover.position.y];
  } else if (rover.direction === "W" || rover.position.y<9) {
    [rover.position.x][rover.position.y++];
  } else if (rover.direction === "S" || rover.position.x>0) {
    [rover.position.x--][rover.position.y];
  } else if (rover.direction === "E" || rover.position.y>0) {
    [rover.position.x][rover.position.y--];
  } else {
    rover.direction === "N";
  }
  rover.travelLog.push("(" + rover.position.x + ", " + rover.position.y + ")");
}

function commands(rover){
  console.log("commandMoves was called");
  for (var i=0; i < commands.length; i++){
    if (commands[i] === "f") {
      moveForward();
    } else if (commands[i] === "b") {
      moveBackward(); 
    } else if (commands[i] === "l") {
      turnLeft();
    } else if (commands[i] === "r") {
      turnRight();
    } else {
      return "The command string has an invalid input. Please limit to use 'f', 'b', 'l' or 'r'.";

    }
  }
   console.log(rover.travelLog);
}