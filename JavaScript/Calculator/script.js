let op_ ="";
let Mem_ ="";
let disResult=false;

function Click(a)
{
 
    let text1 =document.getElementById("screen").value+a;
  
    if (a=="+"|| a=="-" || a=="*" || a=="/")
    {  
        
        
       //document.getElementById("screen").value +=a;
       //let text2=document.getElementById("screen").value ; 
       document.getElementById("screen1").value += a;
       document.getElementById("screen").value ="";
       
    }else if (isNumeric(text1))
    
    {    
       
        
        if (disResult==true)
        {
            document.getElementById("screen").value ="";
            document.getElementById("screen1").value ="";
            disResult=false;
        }
            document.getElementById("screen").value +=a;
            document.getElementById("screen1").value +=a;
            console.log(a);
        
    }
}

function isNumeric(num)
    {
    return !isNaN(num)
    }

function backClick()
{
   let b= document.getElementById("screen").value 
   let iText =document.getElementById("screen1").value
   let len=b.length;
   let L=iText.length;
   let text= b.substring(0,(len-1));
   document.getElementById("screen").value = text; 
   document.getElementById("screen1").value= iText.substring(0,(L-1))  

}

function cearDisp()
{
    document.getElementById("screen").value="";
    document.getElementById("screen1").value="";
    Mem_="";
    disResult=false;
}

function calResult()
{
    let scrText= document.getElementById("screen1").value
    var result= eval(scrText);
    document.getElementById("screen").value =result;  
    console.log(scrText)
    disResult=true;
}

function MemClick()
{
    Mem_=document.getElementById("screen").value;
    document.getElementById("screen")="";
}