class car
{
    constructor(make, model, year, color)
   
    {
        this.make=make;
        this.model=model;
        this.year=year;
        this.color=color
    }

drive()      
{
        console.log('You started the car');
}
make()
{
        console.log('You Step on the brake');
}
whatIsThis()
{
    console.log(this)
}

}

let car1 =new car('Nissan','Quashcai', 2022,'Blue');
let car2 =new car('Mini Cooper','Max-100', 2021,'red');

console.log(car1.whatIsThis());

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

