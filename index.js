const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { constants } = require("buffer");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

console.log("Welcome to the HTML Team info page generator!");
console.log("Manager, please introduce yourself: ");

inquirer.prompt([
  {
    type: "input",
    message: "What is your name? ",
    name: "name",
  },
  {
    type: "input",
    message: "Employee ID? ",
    name: "id",
  },
  {
    type: "input",
    message: "What is your Email address? ",
    name: "email",
  },
  {
    type: "input",
    message: "What is your office number? ",
    name: "officeNumber",
  },
]).then(response => {
  //const { name, id, email, officeNumber } = response;
  var teamManager = new Manager(...Object.values(response))

  console.log(teamManager);
  // promptForNexEmployee ()
})

const promptForNextEmployee = () => {
  inquirer.prompt([{
      // choice of 3
  }]).then(response => {
      // if engineer
      //    promptForEngineer
      // else if intern
      //    promptForIntern
      // else
      //    use the functionality from page-template to generate the team
  })
}

const promptForEngineer = () => {
  inquirer.prompt([{
      //engineer questions
  }]).then(response => {
      // add new engineer to employees array
      // promptForNextEmployee
  })
}

const promptForIntern = () => {
  inquirer.prompt([{
      //intern questions
  }]).then(response => {
      // add new intern to employees array
      // promptForNextEmployee
  })
}

const buildPage = () => {
// render(myArrayOfTeamMembers)
}