// Coding Challenge 6

// Step 2:
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return this.name + " works in " + this.department + ".";
  }
}

// Step 3: 
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); 
    this.teamSize = teamSize;
  }

  describe() {
    return this.name + " manages " + this.teamSize + " people in " + this.department + ".";
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
