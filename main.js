const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var gameSquaresStr = ""+
"0000000000000000000000000000" +
"0000000000000000000000000000" +
"0000000000000000000000000000" +
"1111111111111111111111111111" +
"1000000000000110000000000001" +
"1011110111110110000000000001" +
"1011110111110110000000000001" +
"1011110111110110000000000001" +
"1000000000000000000000000001" +
"1011110000000000000000000001" +
"1011110000000000000000000001" +
"1000000000000000000000000001" +
"1111110000000000000000111111";
var gameSquares = [];
for(var i = 0; i<28*36; i++){
  var thingToPush = 0;
  switch(gameSquaresStr[i]){
    case '0':thingToPush = 0; break;
    case '1':thingToPush = 1; break;
    case '2':thingToPush = 2; break;
  }
  gameSquares.push(thingToPush);
}

ctx.beginPath();
ctx.rect(0,0,1000,1000);
ctx.fillStyle = "#000000";
ctx.fill();
ctx.closePath();

function displayWalls(){
  for(var xSqr = 0; xSqr<28; xSqr++){
    for(var ySqr = 0; ySqr<36; ySqr++){
        if(gameSquares[ySqr*28+xSqr%36]==1){
    ctx.beginPath();
    ctx.rect(xSqr*8,ySqr*8,8,8);
    ctx.fillStyle = "rgba(0, 0, 255, 0.8)";
    ctx.fill();
    ctx.closePath();
  }}}
}


bgImg = new Image();
bgImg.src = 'sheet1.png';


function gridOverlay(){
  for(var xSqr = 0; xSqr<28; xSqr++){
  for(var ySqr = 0; ySqr<36; ySqr++){
  ctx.beginPath();
  ctx.rect(xSqr*8,ySqr*8,1,8);
    ctx.rect(xSqr*8,ySqr*8,8,1);
  ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
  ctx.fill();
  ctx.closePath();
}}


}

function myFunction () {
  ctx.drawImage(bgImg,0,0,224,288,0,8*3,224,288)
  displayWalls()
  gridOverlay()
   requestAnimationFrame(myFunction);
}
requestAnimationFrame(myFunction);

//ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
