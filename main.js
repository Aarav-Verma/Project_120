x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
  document.getElementById("status").innerHTML = "System Is Listening Please Speak";
  recognition.start();

}
recognition.onresult=function(event){
  console.log(event);
  var content=event.results[0][0].transcipt;

  document.getElementById("status").innerHTML="The Speech Has Been Recognised As:"+content;
  if(content=="circle"|| content=="Circle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started Drawing Circle";
    draw_circle="set";
  }
  if(content=="rectangle"||content=="Rectangle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started Drawing Rectangle";
    draw_rect="set";
  }
}

function setup() {
  canvas = createCanvas(900, 600);
}
function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}
var previous_result = '';

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    if ((results[0].confidence > 0.5) && (previous_result != results[0].label));
  }
}



