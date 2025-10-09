
/*
console.log("hello hello");


let pageTitle = document.querySelector("#page-title");
let body = document.querySelector("body");
let audio = document.getElementById("audio");

// Javascript Timeout changes h1 title after three seconds//

setTimeout(function(){
    pageTitle.style.color = "pink";
} , 3000)

 //click event on header changes background color//
 document.querySelector("header").onclick = function(){
    console.log("clicked header");
    body.style.backgroundColor = "red";
    audio.play();

 }

 */

 
let pageTitle = document.querySelector("#page-title");

 setTimeout(function(){
    pageTitle.style.color = "pink";
} , 3000)

 document.querySelector("#image1").addEventListener("click", function(){
    document.querySelector("#image2").style.visibility = "visible";
 
 })
 
  document.querySelector("#image2").addEventListener("click", function(){
    document.querySelector("#image3").style.visibility = "visible";
 })

  document.querySelector("#image3").addEventListener("click", function(){
    document.querySelector("#image4").style.visibility = "visible";
 })

  document.querySelector("#image4").addEventListener("click", function(){
    document.querySelector("#image5").style.visibility = "visible";
 })

  document.querySelector("#image5").addEventListener("click", function(){
    document.querySelector("#image6").style.visibility = "visible";
 })

  document.querySelector("#image6").addEventListener("click", function(){
    alert("AAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");
 })



 