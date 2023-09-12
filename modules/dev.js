import Employee from './employee.js';

class Dev extends Employee {
  getJobType() {
    return "I am a Dev";
  }
}

export { Dev };
