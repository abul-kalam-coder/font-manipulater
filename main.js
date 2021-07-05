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
    }
    function modelLoaded(){
        console.log("model loaded");
    }
    function gotResults(results){
        if(results.length>0){
    console.log(results);
        }}
    
    