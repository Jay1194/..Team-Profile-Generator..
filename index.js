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
        //If the condition evaluates to true, the validation has passed successfully
        if (nameInput) {
          return true;
          //if the condition evaluates to false, the user receives a message and is prompted with the same question until an answer is received
        } else {
          console.log('Please enter The Employees name! ');
          return false;
        }
    }
},
{
    type: 'text',
    name:'id',
    message: "What is the employee's ID number? ",
    validate: idInput => {
        //If the condition evaluates to true, the validation has passed successfully
        if (idInput) {
          return true;
          //if the condition evaluates to false, the user receives a message and is prompted with the same question until an answer is received
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
        //If the condition evaluates to true, the validation has passed successfully
        if (emailInput) {
          return true;
          //if the condition evaluates to false, the user receives a message and is prompted with the same question until an answer is received
        } else {
          console.log("Please enter the employee's email! ");
          return false;
        }
       }
    }
])

//Destructure name from the prompt object
.then(({ name, id, email }) => {
    this.employee = new Employee(name, id, email)

    //Ensure its working
    console.log(this.employee)
});