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

}


//ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

function mouseUpHandler(e) {
var rect = canvas.getBoundingClientRect();
relativeX = e.clientX - rect.left;
relativeY = e.clientY - rect.top;
var selectionX = Math.ceil(relativeX/560*28)-1;
  var selectionY = Math.ceil(relativeY/720*36)-1;
  var selection = (((selectionY*28)-1)+selectionX)+1;
  gameSquares[selection] ++;
  console.log(selectionX+", "+selectionY)
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
        if(gameSquares[ySqr*28+xSqr%36]>0){
ctx.drawImage(sprites[gameSquares[ySqr*28+xSqr%36]],xSqr*8,ySqr*8,8,8)
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
