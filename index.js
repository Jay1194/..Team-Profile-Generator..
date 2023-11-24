//packages
const inquirer = require('inquirer');
const fs = require('fs');

// will import the exported object from generate-site.js, allowing us to use generateSite.writeFile() and generateSite.copyFile().
const { writeFile } = require('./utils/generate-site');
const {generatePage} = require('./src/page-template');

//Extended classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

 // Create an instance of the appropriate class based on the selected role
let employees = []


//add a parameter that will store the project data
const employeePrompt = async () => {


  const { name, id, email, role } = await inquirer
.prompt([
    {
    type: 'text',
    name: 'name',
    message: "What is the employee's name? ",
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the employees Name! ');
          return false;
        }
    }
},
{
    type: 'text',
    name:'id',
    message: "What is the employee's ID number? ",
    validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log("Please enter the employee's ID number! ");
          return false;
        }
    }
},
{
    type:'text',
    name: 'email',
    message: "What is the employee's email? ",
    validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter the employee's Email! ");
          return false;
        }
       }
},
{
    // choose employee role
    type:'list',
    name: 'role',
    message: "What is this employee's role? ",
    choices: ['Manager', 'Engineer', 'Intern'],
}
]);

    // Logic based on the selected role
    if (role === 'Manager') {
      const { officeNumber } = await inquirer.prompt([
          {
              type: 'text',
              name: 'officeNumber',
              message: "What is the manager's office number? ",
              validate: officeNumInput => officeNumInput.trim() !== '' || "Please enter the manager's Office Number!",
          }
      ]);

      return new Manager(name, id, email, officeNumber);
  } else if (role === 'Engineer') {
      const { github } = await inquirer.prompt([
          {
              type: 'text',
              name: 'github',
              message: "What is the engineer's github username? ",
              validate: githubInput => githubInput.trim() !== '' || "Please enter engineer's Github Username!",
          }
      ]);

      return new Engineer(name, id, email, github);
  } else if (role === 'Intern') {
      const { school } = await inquirer.prompt([
          {
              type: 'text',
              name: 'school',
              message: "What school is the intern from? ",
              validate: schoolInput => schoolInput.trim() !== '' || "Please enter the intern's School Name!",
          }
      ]);

      return new Intern(name, id, email, school);
  }
};
const init = async () => {
  const employees = [];
  
  // Prompt for employee details
  const employee = await employeePrompt();
  console.log('Employee:', employee); // Add this line to check the employee object
  employees.push(employee);

  // Generate HTML and write to file
  const pageHTML = generatePage(employees);
  console.log('Page HTML:', pageHTML); // Add this line to check the generated HTML
  await writeFile(pageHTML);
};

// Start the application
init().catch(err => console.error(err));