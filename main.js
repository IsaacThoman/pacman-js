const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
document.addEventListener("mouseup", mouseUpHandler, false);

bgImg = new Image();
bgImg.src = 'sheet1.png';

var sprites = [];

var cropper = document.createElement("canvas");
cropper.width = 8;
cropper.height = 8;
var cropperCtx = cropper.getContext("2d");
cropperCtx.drawImage(bgImg,8,0,8,8,0,0,8,8);
sprites[2] = new Image();
sprites[2].src = cropper.toDataURL();


//ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

function mouseUpHandler(e) {
var rect = canvas.getBoundingClientRect();
relativeX = e.clientX - rect.left;
relativeY = e.clientY - rect.top;
var selectionX = Math.ceil(relativeX/560*28)-1;
  var selectionY = Math.ceil(relativeY/720*36)-1;
  var selection = (((selectionY*28)-1)+selectionX)+1;
  gameSquares[selection] ++;
}

function createString(){
  var output = "";
  for(var i = 0; i<gameSquares.length; i++){
    output = output + gameSquares[i];
  }
  return output;
}

var gameSquaresStr = "";
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
