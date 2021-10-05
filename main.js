var SpeechRecognition = window.webkitSpeechRecognition;
//WebkitSpeechReconigntion is a web speech API used to recognize that we are spaking and convert it into text

var recognition = new SpeechRecognition();
//We will store the API into a new variable
  

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
    //Start function is a predefined function of web speech API and it will convert your speech to text
} 
 
recognition.onresult = function(event) {
  //The onresult function will hold all the values of speech conveted to text

 console.log(event); 

var Content = event.results[0][0].transcript;
//As we are keeping a track of what we have spoken after clicking on the event so due to this we are fetching the text form of transcript and for that the code can be writen as above

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}

function save()
{
  link = document.getElementById("link"); 
  image = document.getElementById("selfie_image").src;
  link.href = image;
  link.click();
}

function speak(){
    var synth = window.speechSynthesis;
    speakData = "Taking your selfie in 3 seconds!";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function (){
      takeSnapshot();
    },3000);
  
}

webcam.set({
    width: 360,
    height : 250 ,
    image_formant : "png",
    png_quality: 90 
})
camera = document.getElementById("camera");

function takeSnapshot(){
    Webcam.snap(function(data_url){
      //Webcam.snap is a predefined function of webcam.js which is used to take a selfie
      //This function contains data_url that can be used to show preview of he image which generates after taking the snapshot
      document.getElementById("result").innerHTML = "<image id='selfie_image' src=" +data_url+"> ";
    });
}
