import { Employee } from ".modules/employee.js";

class Dev extends Employee {
  getJobType() {
    return "I am a Dev";
  }
}

export { Dev };

class Dev extends Employee {
  constructor(id, salary) {
    super(id, salary);
    Object.defineProperty(this, "id", { writable: false });
  }

  getJobType() {
    return "I am a Dev";
  }
}

export { Dev };
