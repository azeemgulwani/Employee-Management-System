// Coding Challenge 6

// Step 2:
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return this.name + " works in " + this.department + " department.";
  }
}

// Step 3: 
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); 
    this.teamSize = teamSize;
  }

  describe() {
    return this.name + " manages " + this.teamSize + " people in " + this.department + " department.";
  }
}

// Step 4: 
const emp1 = new Employee("Alice Johnson", "Finance");
const emp2 = new Employee("Ben Kim", "HR");
const emp3 = new Employee("Diana Lopez", "Marketing");
const emp4 = new Employee("Ethan Brown", "IT Support");
const emp5 = new Employee("Fatima Singh", "Operations");
const mgr1 = new Manager("Chloe Rivera", "Engineering", 15);
const mgr2 = new Manager("George Patel", "Sales", 10);

// Try Output 
console.log(emp2.describe());
console.log(mgr1.describe());

// Step 5:
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    for (let i = 0; i < this.employees.length; i++) {
      const info = this.employees[i].describe();
      console.log(info);
    }
  }
}

// Step 6:
const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(emp3);
myCompany.addEmployee(emp4);
myCompany.addEmployee(emp5);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();