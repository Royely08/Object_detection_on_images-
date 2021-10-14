
img = "";
status = "";

function preload(){
    img = loadImage('example.png');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("chestnut drawer",45,75);
    noFill();
    stroke("#ff0000");
    rect(30,60,450,350);
}

function modelLoaded(){
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}