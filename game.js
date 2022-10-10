const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")
const canvasSize = 600;
canvas.width = canvasSize;
canvas.height = canvasSize;


const snakeBox = 20;
const totalMoves = canvasSize/snakeBox;

const apple = new Image();
apple.src = "images/apple.png";

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let down = new Audio();
let left = new Audio();
let right = new Audio();

dead.src = "audio/dead.mp3";
dead.src = "audio/eat.mp3";
dead.src = "audio/up.mp3";
dead.src = "audio/down.mp3";
dead.src = "audio/left.mp3";
dead.src = "audio/right.mp3";

//define snake
let snake =[];
snake[0] ={
    x : 9 * snakeBox ,
    y : 10 * snakeBox
};

// create food
let food = {};
getFood();

//score
let score = 0;

//snake directio
let dir = "";

document.addEventListener("keydown",direction);

function direction(){
    let key = event.keyCode;
    if(key==37 && dir!="RIGHT"){
        dir = "LEFT";
        left.play();
    }
    else if(key==38 && dir!="DOWN"){
        dir = "UP";
        up.play();
    }
    else if(key==39 && dir!="LEFT"){
        dir = "RIGHT";
        right.play();
    }
    else if(key==40 && dir!="UP"){
        dir = "DOWN";
        down.play();
    }
}

function getFood(){
       food ={
           x : Math.floor(Math.random()*(totalMoves-2) + 3  ) ,
           y : Math.floor(Math.random()*(totalMoves-2) + 3  )*snakeBox
       }
}

function render(){
    ctx.fillStyle="#dcdcdc";
    ctx.fillStyle(0,0,canvasSize,canvasSize);

    for(let i=0;i<snake.length;i++){
        ctx.fillStyle = i==0?"#4CAF50":"white";
        ctx.fillRect(snake[i].y,snakeBox,snakeBox);

        ctx.strokeRect(snake[i].x,snake[i].y,snakeBox,snakeBox);
    }

    ctx.drawImage(apple,food.x,food.y,snakeBox,snakeBox);

}

function fake(){
 let v =10;
  if(v=000){
      console.log(v);
  }  
}


render();

