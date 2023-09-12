import Employee from './employee.js';

class PM extends Employee {
  getJobType() {
    return "I am a PM";
  }
}

export { PM };
