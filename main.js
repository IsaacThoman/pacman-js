const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
document.addEventListener("mouseup", mouseUpHandler, false);

document.addEventListener("keydown", keyDownHandler, false);

var desiredPlayerDirection = 1;
function keyDownHandler(e){
    if(e.keyCode===38){ //up
        desiredPlayerDirection = 3;
    }
    if(e.keyCode===40){ //down
    desiredPlayerDirection = 4;
    }
    if(e.keyCode===37){ //left
    desiredPlayerDirection = 2;
    }
    if(e.keyCode===39){ //right
    desiredPlayerDirection = 1;
    }
}

bgImg = new Image();
bgImg.src = 'sheet1.png';

var wallSprites = [];
var playerSprites = [];

for(var i = 0; i<=24;i++){
  wallSprites[i] = new Image();
  playerSprites[i] = new Image();
}
var pellet1 = new Image();
var pellet2 = new Image();

var spritesReady = false;
bgImg.onload = function() {
  var cropper = document.createElement("canvas");
  cropper.width = 8;
  cropper.height = 8;
  var cropperCtx = cropper.getContext("2d");

  var cropper2 = document.createElement("canvas");
  cropper2.width = 16;
  cropper2.height = 16;
  var cropperCtx2 = cropper2.getContext("2d");


  cropperCtx.drawImage(bgImg, 8, 0, 8, 8, 0, 0, 8, 8); //horizontal wall top
  wallSprites[1].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 8, 30 * 8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[2].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 0, 1*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[3].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 27*8, 1*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[4].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 0, 0, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[5].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 27*8, 0, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[6].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 27*8, 9*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[7].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 0, 9*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[8].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 22*8, (12-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[9] = new Image();
  wallSprites[9].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 5*8, (18-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[10].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 5*8, (16-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[11].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 22*8, (16-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[12].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 7*8, (6-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[13].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 9*8, (7-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[14].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 5*8, (30-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[15].src = cropper.toDataURL();

  cropperCtx.drawImage(bgImg, 20*8, (13-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
    wallSprites[16].src = cropper.toDataURL();

    cropperCtx.drawImage(bgImg, 2*8, (1)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
    pellet1.src = cropper.toDataURL();

    cropperCtx.drawImage(bgImg, 1*8, 3*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
    pellet2.src = cropper.toDataURL();

  cropper.width = 224;
  cropper.height = 488;
  cropperCtx.drawImage(bgImg,224*2+8,0,224,488,0,0,224,488)
  let tempImg = cropperCtx.getImageData(0,0,224,488);
  let tempImgData = tempImg.data;
  let tempImgLength = tempImgData.length;
  for(let i=3; i < tempImgLength; i+=4){ //iterates through each pixel's alpha
    if(tempImgData[i-3]==0&&tempImgData[i-2]==0&&tempImgData[i-1]==0){
      tempImgData[i] = 0;
    }else{
      tempImgData[i] = 255;
    }
  }
  tempImg.data = tempImgData;
  cropperCtx.putImageData(tempImg,0,0);
  playerSprites[0].src = cropper.toDataURL()

let count = 0;
  for(let x = 0; x<=4; x++){
    for(let y = 0; y<=3; y++){
      count++;
      if(count<=9){
      cropperCtx2.clearRect(0,0,16,16);
      cropperCtx2.drawImage(playerSprites[0],x*16,y*16,16,16,0,0,16,16);
      playerSprites[count].src = cropper2.toDataURL();}
    }
  }

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


  // if(gameSquares[selection]==0){
  //   gameSquares[selection] = TMD;
  // }else{
  //   gameSquares[selection] = 0;
  // }
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

        case -1: thingToAdd = 'y'; break;
        case -2: thingToAdd = 'z'; break;


    }
    output = output + thingToAdd;
  }
  return output;
}

var gameSquaresStr ="0000000000000000000000000000000000000000000000000000000000000000000000000000000000005111111111111a911111111111163000000000000dg0000000000004309ffa09fffa0dg09fffa09ffa0430d00g0d000g0dg0d000g0d00g0430ceeb0ceeeb0cb0ceeeb0ceeb043000000000000000000000000004309ffa09a09ffffffa09a09ffa0430ceeb0dg0ceea9eeb0dg0ceeb043000000dg0000dg0000dg000000482222a0dcffa0dg09ffbg09222270000030d9eeb0cb0ceeag04000000000030dg0000000000dg04000000000030dg09220022a0dg040000011111b0cb0400000030cb0c11111000000000040000003000000000022222a09a04000000309a09222220000030dg0c111111b0dg04000000000030dg0000000000dg04000000000030dg09ffffffa0dg040000051111b0cb0ceea9eeb0cb0c111163000000000000dg0000000000004309ffa09fffa0dg09fffa09ffa0430ceag0ceeeb0cb0ceeeb0d9eb043000dg0000000000000000dg0004cfa0dg09a09ffffffa09a0dg09fb9eb0cb0dg0ceea9eeb0dg0cb0cea3000000dg0000dg0000dg0000004309ffffbcffa0dg09ffbcffffa0430ceeeeeeeeb0cb0ceeeeeeeeb0430000000000000000000000000048222222222222222222222222227000000000000000000000000000000000000000000000000000000000"
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

    case 'z':thingToPush = -2; break;
    case 'y':thingToPush = -1; break;
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
if(spritesReady){ctx.drawImage(wallSprites[gameSquares[ySqr*28+xSqr%36]],xSqr*8,ySqr*8,8,8)}
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
var frameOn = 0;
var chompFrame = 0;
var playerDirection = 1;
var chompFrameChange = 1;

var playerX = 13;
var playerY = 20;
var playerMoving = true;
function myFunction () {
  ctx.beginPath();
  ctx.rect(0,0,1000,1000);
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fill();
  ctx.closePath();

  displayWalls()

    var playerSqrX = Math.floor(playerX+0.5)
    var playerSqrY = Math.floor(playerY+0.5)

    frameOn++;
    if(frameOn%2 == 0&&playerMoving){chompFrame+=chompFrameChange;}
    if(chompFrame>=2){chompFrameChange = -1;}
    if(chompFrame<=0){chompFrameChange = 1;}
    var spriteToUse = chompFrame*4+playerDirection;
    if(spriteToUse>9){spriteToUse=9;}
    console.log(chompFrame)


     ctx.drawImage(playerSprites[spriteToUse],((playerX))*8-4,((playerY))*8-4)
    console.log(playerX)
  // ctx.beginPath();
  // ctx.rect(playerSqrX*8,playerSqrY*8,8,8);
  // ctx.fillStyle = "rgba(255,0,0,0.5)";
  // ctx.fill();
  // ctx.closePath();



    var playerGameSquare = playerSqrX%36+playerSqrY*28
   // console.log(gameSquares[playerGameSquare])

    var playerSpeed = 0.2;
    playerMoving = true;
    if(playerDirection ==1&&gameSquares[playerGameSquare+1]==0){
        playerX+=playerSpeed;
    }
    if(playerDirection ==2&&gameSquares[playerGameSquare-1]==0){
        playerX-=playerSpeed;
    }
    if(playerDirection ==3&&gameSquares[playerGameSquare-28]==0){
        playerY-=playerSpeed;
    }
    if(playerDirection ==4&&gameSquares[playerGameSquare+28]==0){
        playerY+=playerSpeed;
    }

    if(playerDirection ==1&&gameSquares[playerGameSquare+1]>0){
        playerX = playerSqrX;
        playerY = playerSqrY;
        playerMoving = false;
    }
    if(playerDirection ==2&&gameSquares[playerGameSquare-1]>0){
        playerX = playerSqrX;
        playerY = playerSqrY;
        playerMoving = false;
    }
    if(playerDirection ==3&&gameSquares[playerGameSquare-28]>0){
        playerX = playerSqrX;
        playerY = playerSqrY;
        playerMoving = false;
    }
    if(playerDirection ==4&&gameSquares[playerGameSquare+28]>0){
        playerX = playerSqrX;
        playerY = playerSqrY;
        playerMoving = false;
    }

    if(playerX==0){
        playerX=26;
    }
    if(playerX==27){
        playerX=1;
    }


    if(desiredPlayerDirection ==1&&gameSquares[playerGameSquare+1]==0){
        playerDirection = 1;
      //  playerX = playerSqrX;
        playerY = playerSqrY;
    }
    if(desiredPlayerDirection ==2&&gameSquares[playerGameSquare-1]==0){
        playerDirection = 2;
    //    playerX = playerSqrX;
        playerY = playerSqrY;
    }
    if(desiredPlayerDirection ==3&&gameSquares[playerGameSquare-28]==0){
        playerDirection = 3;
        playerX = playerSqrX;
    //    playerY = playerSqrY;
    }
    if(desiredPlayerDirection ==4&&gameSquares[playerGameSquare+28]==0){
        playerDirection = 4;
        playerX = playerSqrX;
    //    playerY = playerSqrY;
    }
//  gridOverlay()

   requestAnimationFrame(myFunction);
}
requestAnimationFrame(myFunction);

//ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
