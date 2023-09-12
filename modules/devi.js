import { Employee } from ".modules/employee.js";

class Devi extends Employee {
  getJobType() {
    return "I am a Dev";
  }
}

export { Devi };

class Devi extends Employee {
  constructor(id, salary) {
    super(id, salary);
    Object.defineProperty(this, "id", { writable: false });
  }

  getJobType() {
    return "I am a Dev";
  }
}

export { Devi };
