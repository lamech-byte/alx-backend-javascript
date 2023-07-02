export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  let currentEmployeeIndex = 0;
  let currentDepartmentIndex = 0;

  return {
    next() {
      const currentDepartmentEmployees = employees[currentDepartmentIndex];
      const currentEmployee = currentDepartmentEmployees[currentEmployeeIndex];

      if (currentEmployeeIndex < currentDepartmentEmployees.length - 1) {
        currentEmployeeIndex += 1;
      } else {
        currentEmployeeIndex = 0;
        currentDepartmentIndex += 1;
      }

      return {
        value: currentEmployee,
        done: currentDepartmentIndex === employees.length,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
