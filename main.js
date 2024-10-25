// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
var randomDanceArray = [];
for (var i = 0; i < 100; i++) {
  randomDanceArray[i] = 300;
}
let removalArray = [];
for (var i = 0; i < 100; i++) {
  var random = Math.random();
  if (random < 0.5) removalArray[i] = 200;
  else removalArray[i] = 400;
}
var myArray = [];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// let arr = ["a", "b", "c", "d"];

// let subArray = arr.splice(1, 2)  // ["b", "c"]
// let singleItem = arr.splice(1, 1)[0];

document.addEventListener("keydown", keydownHandler);

var counter = 0;
var direction = "Left";

function keydownHandler(event) {
  console.log(event.code);
  if (event.code == "ArrowDown") {
    myArray.unshift(Math.random() * 600);
    myArray.push(Math.random() * 600);
  } else if (event.code == "ArrowUp") {
    myArray.shift();
    myArray.pop();
  } else if (event.code == "ArrowRight") {
    myArray.push(Math.random() * 600);
    myArray.shift();
  } else if (event.code == "ArrowLeft") {
    myArray.unshift(Math.random() * 600);
    myArray.pop();
  } else if (event.code == "Comma") {
    direction = "Left";
    counter = 0;
  } else if (event.code == "Period") {
    direction = "Right";
    counter = myArray.length;
  } else if (event.code == "Space") {
    // this bit is just the sorting algorithm that i came up with, you can ignore it

    // if (direction == "Left") {
    //   for (var i = 0; i < myArray.length; i++) {
    //     if (myArray[counter] < myArray[counter + 1]) {
    //       var temp = myArray.splice(counter, 1)[0];
    //       myArray.splice(counter + 1, 0, temp);
    //     }
    //     counter++;
    //     if (counter > myArray.length) {
    //       counter = 0;
    //     }
    //   }
    // } else if (direction == "Right") {
    //   for (var i = myArray.length; i > 0; i++) {
    //     if (myArray[counter] > myArray[counter - 1]) {
    //       var temp = myArray.splice(counter, 1)[0];
    //       myArray.splice(counter - 1, 0, temp);
    //     }
    //     counter--;
    //     if (counter < 0) {
    //       counter = myArray.length;
    //     }
    //   }
    // }
    for (var i = 0; i < myArray.length; i++) {
      myArray[i] = 300 + (Math.random() * 10 - 5);
    }
  } else if (event.code == "KeyR") {
    myArray = randomDanceArray.slice();
    for (var i = 0; i < randomDanceArray.length; i++) {
      randomDanceArray[i] = 300;
    }
  } else if (event.code == "Digit1" || event.code == "Numpad1") {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] == 400) {
        myArray.splice(i, 1);
        i--;
      }
    }
  } else if (event.code == "Digit2" || event.code == "Numpad2") {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] == 200) {
        myArray.splice(i, 1);
        i--;
      }
    }
  } else if (event.code == "KeyE") {
    myArray = removalArray.slice();
  }
}
