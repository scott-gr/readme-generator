//requirements
const inquirer = require("inquirer");
const fs = require("fs");
//this file will have markdown styling
const generateMarkdown = require('./utils/generateMarkdown.js');
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
  ///will try to offer choices here. Test if this works...
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
/// the big function! Prompts questions to user, data makes answers into objects, then writes to new markdown file.
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    fs.generateMarkdown('yourReadMe.md', generateMarkdown(data), function (err) {
      if (err) {
        //checks for errors
        return console.log(err);
      }
      // console log success
      console.log('Successfully generated yourReadMe.md!');
    });
  });
}
// function call to initialize program
init();