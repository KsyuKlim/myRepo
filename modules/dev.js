import { Employee } from './employee.js';

class Dev extends Employee {
  constructor(id, salary) {
    super(id, salary);
    Object.defineProperty(this, "id", { writable: false });
  }

  getJobType() {
    return "I am a Dev";
  }

  static returnArrayOfDevs(...args) {
    const devArray = [];

    for (const arg of args) {
      if (arg instanceof Dev) {
        devArray.push(arg);
      }
    }

    return devArray;
  }
}

export { Dev };
