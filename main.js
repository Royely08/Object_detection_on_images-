

img = "";
status = "";
objects = [];

function preload(){
    img = loadImage('exmaple.png');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function draw(){
    image(img,0,0,640,420);

    if(status != ""){
        for(i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#ff0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%",objects[i].x,objects[i].y);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
  /*  image(img,0,0,640,420);
   
    fill("#ff0000");
    text("Drawer",320,120);
    noFill();
    stroke("#ff0000");
    rect(300,90,270,320); */
}

function modelLoaded(){
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}