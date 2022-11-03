//objects
let employee={
name: "John",
position: "Accountant",
salary: 50000,
getSalary: function()
{
document.write("Salary of " + this.name + " is " + this.salary);
}

}

class Bussiness
{
    constructor(name,type,investment,place)
    {
        this.name=name;
        this.businesstype=type;
        this.investment=investment;
        this.place=place;
    }
    //function
    getBussiness()
    {
        document.write("<br><br>Message: " + this.name + " is a " + this.businesstype + " type of bussiness. its investment is " + this.investment + ". Its Location is at "+ this.place)
    }
}

document.write(employee.position);
employee.getSalary();

let e1=new Bussiness("Sunilraj","IT",800000000,"Malappuram");
let e1s2=new Bussiness("IOSS","IT",4000000,"Calicut");
e1.getBussiness();
e1s2.getBussiness();


