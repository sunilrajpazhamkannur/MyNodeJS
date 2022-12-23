class car
{
    setName(name)
    {
    this.name=name;    
    }
    EngineStart()
    {
       console.log('Engine Started for ' + this.name);        
    }
    EngineStop()
    {
        console.log('Engine Stop'+ this.name);
    }

}


class Toyota extends car
{
    topSpeed(speed)
    {
        console.log('Top speed for ' + this.name + ' is ' + speed)  
      } 
}

let car1=new Toyota();
car1.setName('JOHN')
car1.EngineStart();
car1.EngineStop();
car1.topSpeed(6000);