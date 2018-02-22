/**
 * 
 * @param canvasElement - id canvas
 * @param color - color of circle
 * @param percent - how any percent
 * @param animationTime - in ms
 * @param font - font size
 * @param path - width of path in px
 * @returns
 */

function makeCircle(canvasElement, color, percent, animationTime, font, path){

const canvasEl = document.getElementById(canvasElement);
const ctx = canvasEl.getContext('2d');
const x = canvasEl.width / 2;
const y = canvasEl.height / 2;
const endPercent = 85;
const curPerc = 0;
const radius = x - 10;
const fillColor = color;
const percents = percent;
const animTime = animationTime/percent;
const textX = x - 0.6*font;
const textY = y + 0.1*font;

function drowBackgroundCircle(){
ctx.strokeStyle = "#d2d8e0";
ctx.lineWidth = path;
ctx.beginPath();
ctx.arc(x,y,radius,radianAngle(0), radianAngle(360), false);
ctx.stroke();
}
  
function radianAngle(angle) {
    return radians = (Math.PI/180)*angle;
}

function drawCircle(color, size, percent){
ctx.strokeStyle = fillColor;
ctx.lineCap = "round";
ctx.lineWidth = path;
ctx.font = font +"px Georgia";
ctx.fillStyle = fillColor;
ctx.beginPath();
ctx.arc(x,y,radius,radianAngle(270), radianAngle(percentToAngle(percent)), false);
ctx.fillText(percent +'%', textX, textY);
ctx.stroke();
}

function percentToAngle(percent){
  return (percent * 360)/100-90;
}

function animate(percent){
    drowBackgroundCircle()
    drawCircle(color, radius, 0);
    let i = 0;
       let intervalId =setInterval(function(){
       i++;
       ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
       drowBackgroundCircle()
       drawCircle("#5186db", radius, i);
       if(percent === i){
       window.clearInterval(intervalId);
}
    },animTime);
}
animate(percents);
}


function drawCircles(){
    setTimeout(function(){
        makeCircle('html','#73235C',75,1000,15,8);   
        makeCircle('css','#9F488A',60,1000,15,8);
        makeCircle('javascript','#BF608E',50,1000,15,8);
        makeCircle('jquery','#DD8EBD',35,1000,15,8);
        makeCircle('java','#003284',50,1000,15,8);
        makeCircle('spring','#1168f4',25,1000,15,8);
        makeCircle('sql','#4286f4',10,1000,15,8);
        makeCircle('node','#4286f4',10,1000,15,8);
        makeCircle('mongo','#5291f9',10,1000,15,8);
        let list = document.querySelectorAll('canvas');
        list.forEach(e => e.classList.add('showCanvas'));
    },200);
}