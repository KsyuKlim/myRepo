class Employee {
  constructor(id, salary) {
    this.id = id;
    this.salary = salary;
  }

  static compareSalary(emp1, emp2) {
    if (emp1.salary > emp2.salary) {
      return `User with id ${emp1.id} has greater salary`;
    } else if (emp1.salary < emp2.salary) {
      return `User with id ${emp2.id} has greater salary`;
    } else {
      return "salaries are equal";
    }
  }
}

export { Employee }