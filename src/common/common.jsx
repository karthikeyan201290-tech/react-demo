import React from 'react'

export default function Common () {

  const employees = 
    {
      firstName: 'Karthick',
      age: 32,
      department: 'Developer',
    }

  return (
    <div className="container">
      {employees.map((employee) => {
        return (
          <ul className="employee-card">
            <li>Name: {employee.firstName}</li>
            <li>Age: {employee.age}</li>
            <li>Department: {employee.department}</li>
          </ul>
        );
      })}
    </div>
  );
}
