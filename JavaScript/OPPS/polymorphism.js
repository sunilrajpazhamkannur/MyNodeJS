class Animal
{

    constructor(name)
    {
        this.name=name
    }
    eats()
    {
        console.log(this.name + ' eats food')
    }
}

let a=new Animal('DOG')
a.eats();