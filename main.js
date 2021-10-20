const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
//document.addEventListener("mouseup", mouseUpHandler, false);

bgImg = new Image();
bgImg.src = 'sheet1.png';

var sprites = [];

var cropper = document.createElement("canvas");
cropper.width = 8;
cropper.height = 8;
var cropperCtx = cropper.getContext("2d");
var spritesReady = false;
bgImg.onload = function() {

  cropperCtx.drawImage(bgImg, 8, 0, 8, 8, 0, 0, 8, 8); //horizontal wall top
  sprites[1] = new Image();
  sprites[1].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 8, 30 * 8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[2] = new Image();
  sprites[2].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 0, 1*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[3] = new Image();
  sprites[3].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 27*8, 1*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[4] = new Image();
  sprites[4].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 0, 0, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[5] = new Image();
  sprites[5].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 27*8, 0, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[6] = new Image();
  sprites[6].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 27*8, 9*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[7] = new Image();
  sprites[7].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 0, 9*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[8] = new Image();
  sprites[8].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 22*8, (12-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[9] = new Image();
  sprites[9].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 5*8, (18-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[10] = new Image();
  sprites[10].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 5*8, (16-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[11] = new Image();
  sprites[11].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 22*8, (16-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[12] = new Image();
  sprites[12].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 7*8, (6-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[13] = new Image();
  sprites[13].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 9*8, (7-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[14] = new Image();
  sprites[14].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 5*8, (30-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[15] = new Image();
  sprites[15].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 20*8, (13-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  sprites[16] = new Image();
  sprites[16].src = cropper.toDataURL();
spritesReady = true;
}

//ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
var TMD = 1;
function mouseUpHandler(e) { // un-comment the listener
var rect = canvas.getBoundingClientRect();
relativeX = e.clientX - rect.left;
relativeY = e.clientY - rect.top;
var selectionX = Math.ceil(relativeX/560*28)-1;
  var selectionY = Math.ceil(relativeY/720*36)-1;
  var selection = (((selectionY*28)-1)+selectionX)+1;
  if(gameSquares[selection]==0){
    gameSquares[selection] = TMD;
  }else{
    gameSquares[selection] = 0;
  }
  console.log(selectionX+", "+selectionY)
}

function createString(){
  var output = "";
  for(var i = 0; i<gameSquares.length; i++){
    var thingToAdd = "";
    switch(gameSquares[i]){
      case 0: thingToAdd = '0'; break;
      case 1: thingToAdd = '1'; break;
      case 2: thingToAdd = '2'; break;
      case 3: thingToAdd = '3'; break;
      case 4: thingToAdd = '4'; break;
      case 5: thingToAdd = '5'; break;
      case 6: thingToAdd = '6'; break;
      case 7: thingToAdd = '7'; break;
      case 8: thingToAdd = '8'; break;
      case 9: thingToAdd = '9'; break;
      case 10: thingToAdd = 'a'; break;
      case 11: thingToAdd = 'b'; break;
      case 12: thingToAdd = 'c'; break;
      case 13: thingToAdd = 'd'; break;
      case 14: thingToAdd = 'e'; break;
      case 15: thingToAdd = 'f'; break;
      case 16: thingToAdd = 'g'; break;
      case 17: thingToAdd = 'h'; break;
      case 18: thingToAdd = 'i'; break;

    }
    output = output + thingToAdd;
  }
  return output;
}

var gameSquaresStr ="" +
"0000000000000000000000000000000000000000000000000000000000000000000000000000000000005111111111111a911111111111163000000000000dg0000000000004309ffa09fffa0dg09fffa09ffa0430d00g0d000g0dg0d000g0d00g0430ceeb0ceeeb0cb0ceeeb0ceeb043000000000000000000000000004309ffa09a09ffffffa09a09ffa0430ceeb0dg0ceea9eeb0dg0ceeb043000000dg0000dg0000dg000000482222a0dcffa0dg09ffbg09222270000030d9eeb0cb0ceeag04000000000030dg0000000000dg04000000000030dg09220022a0dg040000011111b0cb0400000030cb0c11111000000000040000003000000000022222a09a04000000309a09222220000030dg0c111111b0dg04000000000030dg0000000000dg04000000000030dg09ffffffa0dg040000051111b0cb0ceea9eeb0cb0c111163000000000000dg0000000000004309ffa09fffa0dg09fffa09ffa0430ceag0ceeeb0cb0ceeeb0d9eb043000dg0000000000000000dg0004cfa0dg09a09ffffffa09a0dg09fb9eb0cb0dg0ceea9eeb0dg0cb0cea3000000dg0000dg0000dg0000004309ffffbcffa0dg09ffbcffffa0430ceeeeeeeeb0cb0ceeeeeeeeb0430000000000000000000000000048222222222222222222222222227000000000000000000000000000000000000000000000000000000000"
var gameSquares = [];
for(var i = 0; i<28*36; i++){
  var thingToPush = 0;
  switch(gameSquaresStr[i]){
    case '0':thingToPush = 0; break;
    case '1':thingToPush = 1; break;
    case '2':thingToPush = 2; break;
    case '3':thingToPush = 3; break;
    case '4':thingToPush = 4; break;
    case '5':thingToPush = 5; break;
    case '6':thingToPush = 6; break;
    case '7':thingToPush = 7; break;
    case '8':thingToPush = 8; break;
    case '9':thingToPush = 9; break;
    case 'a':thingToPush = 10; break;
    case 'b':thingToPush = 11; break;
    case 'c':thingToPush = 12; break;
    case 'd':thingToPush = 13; break;
    case 'e':thingToPush = 14; break;
    case 'f':thingToPush = 15; break;
    case 'g':thingToPush = 16; break;
    case 'h':thingToPush = 17; break;
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
        if(gameSquares[ySqr*28+xSqr%36]>0){
if(spritesReady){ctx.drawImage(sprites[gameSquares[ySqr*28+xSqr%36]],xSqr*8,ySqr*8,8,8)}
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
 // ctx.drawImage(bgImg,0,0,224,288,0,8*3,224,288)

  ctx.beginPath();
  ctx.rect(0,0,1000,1000);
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.fill();
  ctx.closePath();


  displayWalls()
  // gridOverlay()
   requestAnimationFrame(myFunction);
}
requestAnimationFrame(myFunction);

//ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
