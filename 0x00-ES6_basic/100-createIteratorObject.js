export default function createIteratorObject(report) {
  const employees = Object.values(report.allEmployees);
  let currentEmployeeIndex = 0;
  let currentDepartmentIndex = 0;

  return {
    next() {
      const currentDepartmentEmployees = employees[currentDepartmentIndex];
      const currentEmployee = currentDepartmentEmployees[currentEmployeeIndex];

      if (currentEmployeeIndex < currentDepartmentEmployees.length - 1) {
        currentEmployeeIndex++;
      } else {
        currentEmployeeIndex = 0;
        currentDepartmentIndex++;
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
