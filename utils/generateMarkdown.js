// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  <img src="https://img.shields.io/badge/license-${data.license}-blue"/>
  
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Test](#test)
* [License](#license)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.install}

## Usage
${data.usage}

## Contributors
${data.contribute}

## Test
${data.test}

## License
${data.license}

## Questions
Thank you for checking out my project. Please contact me at ${data.email} or visit http://github.com/${data.username}
`;
}
// exports this markdown into index.js to write it to the user's new markdown file.
module.exports = generateMarkdown;
