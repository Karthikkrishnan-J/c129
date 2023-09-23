song1_name = "Lambo Flow";
song2_name = "Peter Pan";
statusSong1 = "";
scoreLeftWristY = "0";
playSong = "";
song1 = "";
song2 = "";
leftWristY = "";
leftWristX = "";
rightWristY = "";
rightWristX = "";
function preload(){
    song1 = loadSound("songy.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    machine = ml5.poseNet(camera, loadModal);
    machine.on("pose", gotResult);
}
function loadModal(){
    console.log("Modal is loaded");
}
function gotResult(result){
    if(result.length > 0){
        console.log(result)
        leftWristY = result[0].pose.leftWrist.y;
        leftWristX = result[0].pose.leftWrist.x;
        rightWristY = result[0].pose.rightWrist.y;
        rightWristX = result[0].pose.rightWrist.x;
        console.log("leftWristY = " + leftWristY);
        console.log("leftWristX = " + leftWristX);
        console.log("rightWristY = " + rightWristY);
        console.log("rightWristX = " + rightWristX);
        scoreLeftWristY = result[0].pose.keypoints[9].score;
        console.log("the left score is = " + scoreLeftWristY);
}
}
function draw(){
    image(camera, 0, 0,400, 400);
    stroke("red");
    fill("red");
    statusSong1 = song1.isPlaying();
    if(scoreLeftWristY > 0.2){
        circle(leftWristX, leftWristY, 20);
        song2.stop();   
    }
    if(statusSong1 == false){
        song1.play();
        document.getElementById("song").innerHTML = song1_name;
    }
}