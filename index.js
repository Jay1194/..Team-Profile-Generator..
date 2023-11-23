const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Employee prompt
inquirer
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
])

//Destructure name, id, email and role from the prompt object
.then(({ name, id, email, role}) => {

    // Create an instance of the appropriate class based on the selected role
    let employee;

    //Manager logic
    if (role === 'Manager') {
        inquirer.prompt([
            {
                type: 'text',
                name: 'officeNumber',
                message: "What is the managers office number? ",
                validate: officeNumInput => {
                    if (officeNumInput) {
                      return true;
                    } else {
                      console.log("Please enter the manager's Office Number! ");
                      return false;
                    }
                }
            }
        ])
        .then(({ officeNumber }) => {
            employee = new Manager(name, id, email, officeNumber)
            console.log(employee);
        })
       
    } else if (role === 'Engineer') {
        inquirer.prompt([
            {
                type: 'text',
                name: 'github',
                message: "What is the engineer's github username? ",
                validate: githubInput => {
                    if (githubInput) {
                      return true;
                    } else {
                      console.log("Please enter engineer's Github Username! ");
                      return false;
                    }
                }
            }
        ])
        .then(({ github }) => {
            employee = new Engineer(name, id, email, github)
            console.log(employee);
        })

    } else if (role == 'Intern') {
        inquirer.prompt([
            {
                type: 'text',
                name: 'school',
                message: "What school is the intern from? ",
                validate: schoolInput => {
                    if (schoolInput) {
                      return true;
                    } else {
                      console.log("Please enter the intern's School Name! ");
                      return false;
                    }
                }
            }
        ])
        .then(({ school }) => {
            employee = new Intern(name, id, email, school)
            console.log(employee);
        })
    }
});





