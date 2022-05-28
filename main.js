nose_x=0;
nose_y=0;

function preload(){
mustache=loadImage('https://i.postimg.cc/y8MmnZFy/mustache-png.png');
}

function setup(){
    canvas=createCanvas(300, 300)
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            nose_x=results[0].pose.nose.x;
            nose_y=results[0].pose.nose.y;
            console.log('Your nose x = '+results[0].pose.nose.x);
            console.log('Your nose y = '+results[0].pose.nose.y);
        }
}

function modelLoaded(){
console.log('poseNet is initialized');
}

function draw(){
image(video, 0, 0, 300, 300);
image(mustache, nose_x-5, nose_y+10, 30, 30);
}

function take_snapshot(){
    Save('Mymustache_filter.png')
}