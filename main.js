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
var ghostSprites = [];

for(var i = 0; i<=35;i++){
  wallSprites[i] = new Image();
  playerSprites[i] = new Image();
  ghostSprites[i] = new Image();
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

  cropperCtx.drawImage(bgImg, 13*8, (15-3)*8, 8, 8, 0, 0, 8, 8); //horizontal wall bottom
  wallSprites[17].src = cropper.toDataURL();

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


//ghost sprites
  let count2 = 0;
  for(let y = 0; y<=4; y++){
    for(let x = 0; x<8; x++){
      count2++;
      if(count2<=32){
        cropperCtx2.clearRect(0,0,16,16);
        cropperCtx2.drawImage(playerSprites[0],x*16,(4*16)+y*16,16,16,0,0,16,16);
        ghostSprites[count2].src = cropper2.toDataURL();}

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
var gameSquaresStr = "0000000000000000000000000000000000000000000000000000000000000000000000000000000000005111111111111a911111111111163yyyyyyyyyyyydgyyyyyyyyyyyy43y9ffay9fffaydgy9fffay9ffay43zd00gyd000gydgyd000gyd00gz43yceebyceeebycbyceeebyceeby43yyyyyyyyyyyyyyyyyyyyyyyyyy43y9ffay9ay9ffffffay9ay9ffay43yceebydgyceea9eebydgyceeby43yyyyyydgyyyydgyyyydgyyyyyy482222aydcffa0dg09ffbgy922227000003yd9eeb0cb0ceeagy400000000003ydg0000000000dgy400000000003ydg0922hh22a0dgy40000011111bycb0400000030cbyc11111000000y00040000003000y00000022222ay9a04000000309ay922222000003ydg0c111111b0dgy400000000003ydg0000000000dgy400000000003ydg09ffffffa0dgy40000051111bycb0ceea9eeb0cbyc111163yyyyyyyyyyyydgyyyyyyyyyyyy43y9ffay9fffaydgy9fffay9ffay43yceagyceeebycbyceeebyd9eby43zyydgyyyyyyyyyyyyyyyydgyyz4cfaydgy9ay9ffffffay9aydgy9fb9ebycbydgyceea9eebydgycbycea3yyyyyydgyyyydgyyyydgyyyyyy43y9ffffbcffaydgy9ffbcffffay43yceeeeeeeebycbyceeeeeeeeby43yyyyyyyyyyyyyyyyyyyyyyyyyy4822222222222222222222222222700000000000000000000000000000000000000000000000000000000"
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
  }
        if(gameSquares[ySqr*28+xSqr%36]==-1){
            if(spritesReady){ctx.drawImage(pellet1,xSqr*8,ySqr*8,8,8)};
        }
        if(gameSquares[ySqr*28+xSqr%36]==-2){
            if(spritesReady&&(Math.floor(frameOn/8))%2==0){ctx.drawImage(pellet2,xSqr*8,ySqr*8,8,8)};
        }

    }}
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
var playerY = 26;

var ghostsX = [13.5,13.5,11.5,15.5];
var ghostsY = [14,17,17,17];
var ghostsDirection = [2,4,3,3];


var playerMoving = true;
function myFunction () {
  if(!spritesReady){
    requestAnimationFrame(myFunction);
    return;}
  ctx.beginPath();
  ctx.rect(0,0,1000,1000);
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fill();
  ctx.closePath();
  var ghostWiggleFrame = Math.floor(frameOn/4)%2;
  // if(ghostWiggleFrame==0){
  //   ctx.drawImage(ghostSprites[9],0,0,16,16)
  // }else{
  //   ctx.drawImage(ghostSprites[10],0,0,16,16)
  // }

  displayWalls()

    var playerSqrX = Math.floor(playerX+0.5)
    var playerSqrY = Math.floor(playerY+0.5)
    var playerGameSquare = playerSqrX%36+playerSqrY*28

    frameOn++;
    if(frameOn%2 == 0&&playerMoving){chompFrame+=chompFrameChange;}
    if(chompFrame>=2){chompFrameChange = -1;}
    if(chompFrame<=0){chompFrameChange = 1;}
    var spriteToUse = chompFrame*4+playerDirection;
    if(spriteToUse>9){spriteToUse=9;}
  //  console.log(chompFrame)

  if(gameSquares[playerGameSquare]==-1){
    gameSquares[playerGameSquare]=0;
  }

  if(gameSquares[playerGameSquare]==-2){
    gameSquares[playerGameSquare]=0;
  }

    // ctx.beginPath();
    // ctx.rect(playerSqrX*8,playerSqrY*8,8,8);
    // ctx.fillStyle = "rgba(255,0,0,0.5)";
    // ctx.fill();
    // ctx.closePath();

     ctx.drawImage(playerSprites[spriteToUse],((playerX))*8-4,((playerY))*8-4)

    ctx.drawImage(ghostSprites[ghostWiggleFrame+(ghostsDirection[0]*2)-1],((ghostsX[0]))*8-4,((ghostsY[0]))*8-4)
    ctx.drawImage(ghostSprites[ghostWiggleFrame+(ghostsDirection[1]*2)-1+8],((ghostsX[1]))*8-4,((ghostsY[1]))*8-4)
    ctx.drawImage(ghostSprites[ghostWiggleFrame+(ghostsDirection[2]*2)-1+16],((ghostsX[2]))*8-4,((ghostsY[2]))*8-4)
    ctx.drawImage(ghostSprites[ghostWiggleFrame+(ghostsDirection[3]*2)-1+24],((ghostsX[3]))*8-4,((ghostsY[3]))*8-4)
 //   console.log(playerX)





   // console.log(gameSquares[playerGameSquare])
    var ghostSpeed = 0.1;


//console.log("hey")


  for(var ghostOn = 0; ghostOn<=3; ghostOn++){
      var ghostSqrX = Math.floor(ghostsX[ghostOn]+0.5)
      var ghostSqrY = Math.floor(ghostsY[ghostOn]+0.5)
      var ghostGameSquare = ghostSqrX%36+ghostSqrY*28

      var dist1 = Math.sqrt(Math.pow((ghostSqrX+1-playerSqrX),2)+Math.pow((ghostSqrY-playerSqrY),2));
      var dist2 = Math.sqrt(Math.pow((ghostSqrX-1-playerSqrX),2)+Math.pow((ghostSqrY-playerSqrY),2));
      var dist3 = Math.sqrt(Math.pow((ghostSqrX-playerSqrX),2)+Math.pow((ghostSqrY-1-playerSqrY),2));
      var dist4 = Math.sqrt(Math.pow((ghostSqrX-playerSqrX),2)+Math.pow((ghostSqrY+1-playerSqrY),2));
      if(gameSquares[ghostGameSquare+1]>0){dist1=1000}
      if(gameSquares[ghostGameSquare-1]>0){dist2=1000}
      if(gameSquares[ghostGameSquare-28]>0){dist3=1000}
      if(gameSquares[ghostGameSquare+28]>0){dist4=1000}
      if(ghostsDirection[ghostOn]==1){dist2=1000}
      if(ghostsDirection[ghostOn]==2){dist1=1000}
      if(ghostsDirection[ghostOn]==3){dist4=1000}
      if(ghostsDirection[ghostOn]==4){dist3=1000}


      var min = Math.min(Math.min(dist1,dist2),Math.min(dist3,dist4));
    //  if(ghostsDirection[ghostOn] ==1){

          if(gameSquares[ghostGameSquare+1]<1){//1
              if(min==dist1){
                  ghostsDirection[ghostOn]=1;
              }
          }
          if(gameSquares[ghostGameSquare-1]<1){//2
               if(min==dist2){
                    ghostsDirection[ghostOn]=2;
                }
          }
          if(gameSquares[ghostGameSquare-28]<1){//3
              if(min==dist3){
                  ghostsDirection[ghostOn]=3;
              }
          }
          if(gameSquares[ghostGameSquare+28]<1){//4
              if(min==dist4){
                  ghostsDirection[ghostOn]=4;
              }
          }

     // }
      if(ghostsDirection[ghostOn] ==2){

      }
      if(ghostsDirection[ghostOn] ==3){

      }
      if(ghostsDirection[ghostOn] ==4){

      }




      if(ghostsDirection[ghostOn]==1){
          ghostsX[ghostOn]+=ghostSpeed;
      }
      if(ghostsDirection[ghostOn]==2){
          ghostsX[ghostOn]-=ghostSpeed;
      }
      if(ghostsDirection[ghostOn]==3){
          ghostsY[ghostOn]-=ghostSpeed;
      }
      if(ghostsDirection[ghostOn]==4){
          ghostsY[ghostOn]+=ghostSpeed;
      }
    }


    var playerSpeed = 0.15;
    playerMoving = true;
    if(playerDirection ==1&&gameSquares[playerGameSquare+1]<1){
        playerX+=playerSpeed;
    }
    if(playerDirection ==2&&gameSquares[playerGameSquare-1]<1){
        playerX-=playerSpeed;
    }
    if(playerDirection ==3&&gameSquares[playerGameSquare-28]<1){
        playerY-=playerSpeed;
    }
    if(playerDirection ==4&&gameSquares[playerGameSquare+28]<1){
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


    if(desiredPlayerDirection ==1&&gameSquares[playerGameSquare+1]<1){
        playerDirection = 1;
      //  playerX = playerSqrX;
        playerY = playerSqrY;
    }
    if(desiredPlayerDirection ==2&&gameSquares[playerGameSquare-1]<1){
        playerDirection = 2;
    //    playerX = playerSqrX;
        playerY = playerSqrY;
    }
    if(desiredPlayerDirection ==3&&gameSquares[playerGameSquare-28]<1){
        playerDirection = 3;
        playerX = playerSqrX;
    //    playerY = playerSqrY;
    }
    if(desiredPlayerDirection ==4&&gameSquares[playerGameSquare+28]<1){
        playerDirection = 4;
        playerX = playerSqrX;
    //    playerY = playerSqrY;


    }
 // gridOverlay()

   requestAnimationFrame(myFunction);
}
requestAnimationFrame(myFunction);

//ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
