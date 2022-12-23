class Employee
{
  EmployeeDetails(name, id,phone){
    this.name=name
    this.id=id
    this.phone=phone
  }

  empId(){
    return this.id;
  }
  empName(){
    return this.name;
  }
  empPhone()
  {
    return this.phone
  }

}
let emp2=new Employee()
emp2.EmployeeDetails('SUNILRAJ','10000000uk','9446832204')
console.log(emp2.empName())
console.log(emp2.empId());
console.log(emp2.empPhone());