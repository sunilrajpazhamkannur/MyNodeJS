 var heading=document.createElement("h1");
 function create()
 {
    heading.innerHTML="Hellow World";
    document.body.appendChild(heading);
 }

 function remove()
 {
    heading.remove();
 }

 var he11 =document.getElementById("he11");
 var btn =document.getElementById("btn");


 btn.addEventListener("click",changeColor1);
 var a=true
 var b=false
 he11.addEventListener("mouseover",backgroundBG )
 he11.addEventListener("mouseleave",backgroundFG )
 
 function changeColor1(){
    he11.style.color="red";
 }
 function backgroundBG()
  {
    he11.style.backgroundColor="green";   
  }
 function backgroundFG()
  {
    he11.style.backgroundColor="white";   
  }