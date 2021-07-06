text_value="";
text_size=0;
nose_y=0;
nose_x=0;
left_wrist=0;
rightwrist=0;

function input(){
    text_value=document.getElementById('input').value;
}

function setup(){
    video=createCapture(VIDEO);
    video.size(560,500);
    canvas=createCanvas(560,500);
    canvas.position(760,150);
    video.position(150,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotResults);
    }

    function draw(){
        background('#00a8e8');
        textSize(text_size);
        text(text_value,nose_x,nose_y);
    }

    function modelLoaded(){
        console.log("model loaded");
    }

    function gotResults(results){
        if(results.length>0){
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    left_wrist=results[0].pose.leftWrist.x;
    rightwrist=results[0].pose.rightWrist.x;
    text_size=floor(left_wrist-rightwrist);
        }
    }
    
    