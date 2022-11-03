
let a=4
let b=10
document.write("<h1>Total : " + (a+b)+ "<br>")

document.write("Adithyan1 </h1>")
let result='';
let i=0;
do{
i=i+1;
result=result+ " <h2>" + i + "<br>";
 }while (i<4);
document.write(result + "");
//comments
var test1;
document.write(typeof(test1));

if (a!=4)
{
    document.write("<br>true");

}else{
    document.write("<br>fales<br>")
}

switch(a)
{
    case 6:
        document.write("First");
        break;
    case 5:
        document.write("Second");
        break;
    default :
        document.write("Default");
        break;

}
function calculate(a,b)
{
document.write("<br>A: " + a)
document.write("<br> B: "+ b)

return (a+b)
}
var tot=calculate(10,100);
document.write ("Total AMT: "+ tot);


var animal=["lion","Cat","Tiger","Monkey","Dog","Buffello"];
document.write("<br>"+ animal)
document.write("<br>"+ animal[1]);
animal[2]="Chicken"
document.write("<br>"+ animal)
animal.push("Man","Women","Kids","Human")
animal.
var x=animal.length
document.write("< br></br>"+ x);
for(let i=0;i<x;i++)
{
    document.write(
        animal[i]+ "<br>"
    );
}

