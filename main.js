const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(0,0,1000,1000);
ctx.fillStyle = "#000000";
ctx.fill();
ctx.closePath();

for(var xSqr = 0; xSqr<28; xSqr++){
  for(var ySqr = 0; ySqr<36; ySqr++){
  ctx.beginPath();
  ctx.rect(xSqr*8,ySqr*8,8,8);
  ctx.fillStyle = "#ffffff";
  if((xSqr+ySqr)%2==0){
      ctx.fillStyle = "#000000";
  }
  ctx.fill();
  ctx.closePath();
}}
