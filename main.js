var song_1= ""
var song_2=""
var song_1_play=""
var leftWristY=0
var rightristY=0
function preload(){

}
function setup(){
 

    canvas= createCanvas(500,400)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    poseNet= ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotposes)
    
}
    
    function draw(){
    image(video,0,0,500,400)
}

function modelloaded(){
    console.log("Successfully model loaded")
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
        leftWristY= results[0].pose.leftWrist.y
        rightristY= results[0].pose.rightWrist.y
        console.log("leftWrist Y " + leftWristY)
        console.log("rightWrist Y " + rightristY)
    }
}
function play_1(){
    
song_1= document.getElementById("select_song_1").value

if(song_1=="song_1_1"){

    
    document.getElementById("control_1").setAttribute('src',"DO GALLAN.mp3" );
    console.log( document.getElementById("control_1").src)
    document.getElementById("first_control").load()
    document.getElementById("first_control").play()
}else if(song_1=="song_1_4"){
    document.getElementById("control_1").setAttribute('src',"narayam.mp3" );
    console.log( document.getElementById("control_1").src)
    document.getElementById("first_control").load()
    document.getElementById("first_control").play()
}else if(song_1=="song_1_2"){
    document.getElementById("control_1").setAttribute('src',"Aaj Se Teri.mp3" );
    console.log( document.getElementById("control_1").src)
    document.getElementById("first_control").load()
    document.getElementById("first_control").play()
}else if(song_1=="song_1_3"){
    document.getElementById("control_1").setAttribute('src',"Ik Mulaqaat -.mp3" )
    console.log( document.getElementById("control_1").src)
    document.getElementById("first_control").load()
    document.getElementById("first_control").play()
}


}



function play_2(){
    
    song_2= document.getElementById("song_2").value
    
    if(song_2=="song_2_1"){
    
        
        document.getElementById("control_2").setAttribute('src',"Aaj Se Teri.mp3" );
        console.log( document.getElementById("control_2").src)
        document.getElementById("second_control").load()
        document.getElementById("second_control").play()
    }else if(song_2=="song_2_2"){
        document.getElementById("control_2").setAttribute('src',"DO GALLAN.mp3" );
        console.log( document.getElementById("control_2").src)
        document.getElementById("second_control").load()
        document.getElementById("second_control").play()
    }else if(song_2=="song_2_3"){
        document.getElementById("control_2").setAttribute('src',"narayam.mp3" );
        console.log( document.getElementById("control_2").src)
        document.getElementById("second_control").load()
        document.getElementById("second_control").play()
    }else if(song_2=="song_2_4"){
        document.getElementById("control_2").setAttribute('src',"Ik Mulaqaat -.mp3" )
        console.log( document.getElementById("control_2").src)
        document.getElementById("second_control").load()
        document.getElementById("second_control").play()
    }
    
    
    }
    
