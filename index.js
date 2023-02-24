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

console.log("-".repeat(50));
console.log("Welcome to the HTML Team info page generator!");
console.log("Manager, please introduce yourself: ");
console.log("-".repeat(50));

inquirer
  .prompt([
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
  ])
  .then((response) => {
    //const { name, id, email, officeNumber } = response;
    const teamManager = new Manager(...Object.values(response));

    // console.log(teamManager);
    promptForNextEmployee();
  });

const promptForNextEmployee = () => {
  console.log("-".repeat(50));
  console.log("Please add empoyees: ");
  console.log("-".repeat(50));
  inquirer
    .prompt([
      {
        type: "list",
        name: "acc",
        choices: [
          new inquirer.Separator("### Type of account: ###"),
          "Engineer",
          "Intern",
          "Finish building the team",
        ],
      },
    ])
    .then((response) => {
      switch (response.acc) {
        case "Engineer":
          promptForEngineer();
          break;

        case "Intern":
          promptForIntern();
          break;
        case "Finish building the team":
          buildPage();
          break;
      }

    });
};

const promptForEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name? ",
        name: "name",
      },
      {
        type: "input",
        message: "Their ID? ",
        name: "id",
      },
      {
        type: "input",
        message: "Engineer's Email address? ",
        name: "email",
      },
      {
        type: "input",
        message: "His GitHub username? ",
        name: "github",
      },
    ])
    .then((response) => {
      // add new engineer to employees array
      promptForNextEmployee();
    });
};

const promptForIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name? ",
        name: "name",
      },
      {
        type: "input",
        message: "Their ID? ",
        name: "id",
      },
      {
        type: "input",
        message: "Intern's Email address? ",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern's school? ",
        name: "school",
      },
    ])
    .then((response) => {
      // add new intern to employees array
      promptForNextEmployee();
    });
};

const buildPage = () => {
  console.log("Generating your HTML...");
  // render(myArrayOfTeamMembers)
};
