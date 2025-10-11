
let pageTitle = document.querySelector("#page-title");
let body = document.querySelector("body");

setTimeout(function(){ body.style.backgroundColor = "white"; } , 1000000)

 setTimeout(function(){
    pageTitle.style.color = "black";
} , 3000)


 document.querySelector("#image1-1").addEventListener("click", function(){
    document.querySelector("#image1-1").style.visibility = "hidden";
    alert("who am i...");
 })

  document.querySelector("#image1-2").addEventListener("click", function(){
    document.querySelector("#image1-2").style.visibility = "hidden";
 })

   document.querySelector("#image1-3").addEventListener("click", function(){
    document.querySelector("#image1-3").style.visibility = "hidden";
 })

    document.querySelector("#image1-4").addEventListener("click", function(){
    document.querySelector("#image1-4").style.visibility = "hidden";
 })

    document.querySelector("#image2-1").addEventListener("click", function(){
    document.querySelector("#image2-1").style.visibility = "hidden";
 })
 
    document.querySelector("#image2-3").addEventListener("click", function(){
    document.querySelector("#image2-3").style.visibility = "hidden";
 })
 
    document.querySelector("#image2-2").addEventListener("click", function(){
    document.querySelector("#image2-2").style.visibility = "hidden";
      alert("I need to look prettier");
 })

    document.querySelector("#image2-4").addEventListener("click", function(){
    document.querySelector("#image2-4").style.visibility = "hidden";
 })

      document.querySelector("#image3-1").addEventListener("click", function(){
    document.querySelector("#image4-1").style.visibility = "visible";
    document.querySelector("#image3-1").style.visibility = "hidden";
 })

      document.querySelector("#image3-2").addEventListener("click", function(){
    document.querySelector("#image4-2").style.visibility = "visible";
    document.querySelector("#image3-2").style.visibility = "hidden";
    alert("i can't remember what I look like anymore")
 })

      document.querySelector("#image3-3").addEventListener("click", function(){
    document.querySelector("#image4-3").style.visibility = "visible";
    document.querySelector("#image3-3").style.visibility = "hidden";
    alert("will I ever remember my face?")
 })

      document.querySelector("#image3-4").addEventListener("click", function(){
    document.querySelector("#image4-4").style.visibility = "visible";
    document.querySelector("#image3-4").style.visibility = "hidden";
    alert("I feel like I'm losing myself")
 })

    document.querySelector("#image5-1").addEventListener("click", function(){
    document.querySelector("#image5-1").style.visibility = "hidden";
    alert("Am I pretty yet?");
 })

     document.querySelector("#image5-2").addEventListener("click", function(){
    document.querySelector("#image5-2").style.visibility = "hidden";
 })

     document.querySelector("#image6-1").addEventListener("click", function(){
    document.querySelector("#image6-1").style.visibility = "hidden";
 })

     document.querySelector("#image6-2").addEventListener("click", function(){
    document.querySelector("#image6-2").style.visibility = "hidden";
    alert("......................................")
 })

      document.querySelector("#image4-4").addEventListener("click", function(){
    document.querySelector("#self").style.visibility = "visible";
 })