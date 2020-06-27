const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// activity 40 for example

// array of questions for user
const questions = [
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please give a brief description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Please provide instructions for installations.',
    name: 'install',
  },
  {
    type: 'input',
    message: 'Please provide usage instructions',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'List any contributors to credit for this project.',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'Please provide instructions for testing the code.',
    name: 'test',
  },
  {
    type: 'input',
    message: 'What license will you use for this project?',
    name: 'license',
    choices: [
      {
        name: "MIT License",
      },
      {
        name: "GNU General Public License",
      }
      {
        name: "Mozille Public License 2.0",
      }
      {
        name: "Apache License 2.0",
      },
    ],
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
];



// function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeToFile('') /// add file path
  })
// use the inquirer package
}

// function to write README file
function writeToFile(fileName, data) {
  //us the fs package
}
// function call to initialize program
init();

 // see documentaion on npmjs