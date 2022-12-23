function Employee(name, age, address, baseSalary)
{
    this.name=name;
    this.age=age
    this.address=address
    this.baseSalary=baseSalary
    let monthlyBonus=1000;

    let finalSalaryFun=function(){
        let finalSalary=baseSalary+ monthlyBonus;
        console.log('Monthly Salary: '+ finalSalary)
    }

    this.empDetails=function(){
        console.log('Name : '+ this.name)
        console.log('Age: '+ this.age)
        console.log('Address: ' + this.address)
       finalSalaryFun();
    }
}
let emp1=new Employee('JOHN',20,'18 CHESTER STREET, OLDAM',25000)
emp1.empDetails();

