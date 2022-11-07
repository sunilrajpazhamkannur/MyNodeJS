let display=document.getElementById('display');
let buttons=Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click',(e) =>{
        switch(e.target.innerText)
        {
            case 'C':
            display.innerText='';
            break;
            case '↞':
                if(display.innerText){
                display.innerText=display.innerText.slice(0,-1);
                }
                break;
            case '=':              
                 if(eval(display.innerText)=='undefined')
                 {
                    display.innerText='';
                    break;
                }
                try{
                display.innerText=eval(display.innerText);
                }catch{
                    display.innerText='';
                    beep();
                }
                break;
            default:
               
                
                
                    display.innerText+=e.target.innerText;
                    break;
               
        }

    });
});function beep() {
    var context = new AudioContext();
    var oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = 800;
    oscillator.connect(context.destination);
    oscillator.start(); 
    // Beep for 500 milliseconds
    setTimeout(function () {
        oscillator.stop();
    }, 500);
  }
  