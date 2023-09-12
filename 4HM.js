import { Dev } from "./modules/dev.js";
import { PM } from "./modules/pm.js";
import Employee from "./modules/employee.js";

const dev = new Dev(1, 2000);
const pm = new PM(2, 2500);
const dev2 = new Dev(3, 2000);
console.log(dev.getJobType()); // виведе I am a Dev
console.log(pm.getJobType()); // виведе I am a PM
console.log(Employee.compareSalary(dev, pm)); // виведе User with id 2 has greater salary
console.log(Employee.compareSalary(Dev, dev2)); // виведе salaries are equal
