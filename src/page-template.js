const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

//create function for employee
const generatePage = (employees) => {
    const employeeCards = employees.map(employee => {
    
    return `
    <div class="card">
      <div class="card-header">
        <h2>${employee.name}</h2>
        <h3>${employee.getRole()}</h3>
      </div>
      <div class="card-body">
        <p>ID: ${employee.id}</p>
        <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
        ${generateEmployeeDetails(employee)}
      </div>
    </div>
  `;
}).join('');

return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Employee Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    </head>
  
    <body>
      <header>
        <div class="text-bg-danger p-4">
          <h1 class="text-center">My Team</h1>
        </div>
      </header>
      <main> 
      ${employeeCards}
    </main>

    <footer>
    </footer>
  </body>
  </html>
`;
};

// Helper function to generate additional details based on employee type
const generateEmployeeDetails = (employee) => {
    
      if (employee instanceof Manager) {
      // Manager-specific details
      return `
        <p>Office Number: ${employee.getOfficeNumber()}</p>
      `;

    } else if (employee instanceof Engineer) {
      // Engineer-specific details
      return `
        <p>Github: ${employee.getGithub()}</p>
      `;

    } else if (employee instanceof Intern) {
      // Intern-specific details
      return `
        <p>School: ${employee.getSchool()}</p>
      `;
  };
}


module.exports = {generatePage}