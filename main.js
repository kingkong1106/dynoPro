 
status = "";
objects = [];
function preload() {
 
}
function setup() {
canvas = createCanvas(380, 380);
canvas.center();
 

}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
document.getElementById("status").innerHTML = "status : dectecting object";
}
function modelloaded() {
    console.log("model loaded");
    status = true;
      
}
function gotresult(error, results){
if(error)
{
    console.log(error);
}
console.log(results);
objects = results;
}
function draw() {
image(video, 0, 0, 380, 380);
if(status != "")
{
    r = random(255);
    g = random(225);
b = random(225);
objectDetector.detect(video, gotresult);
for(i = 0; i < objects.length; i++)
{
document.getElementById("status").innerHTML = "status : object detected";
document.getElementById("number_of_objects").innerHTML = "number of objects detected are: " + objects.length;
fill(r,g,b);
percent = floor(objects[i].confidence * 100);
text(objects[i].label + " " + percent + " %", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke(r,g,b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
 
}
}
}