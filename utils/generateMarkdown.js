// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
<hr>
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Test](#test)
* [License](#license)
* [Questions](#questions)

<hr>
## Description
${data.description}

<hr>
## Installation
${data.install}

<hr>
## Usage
${data.usage}

<hr>
## Contributors
${data.contribute}

<hr>
## Test
${data.test}

<hr>
## License
${data.license}

<hr>
## Questions
Thank you for checking out my project. Please contact me at ${data.email} or visit http://github.com/${data.username}
`;
}
// exports this markdown into index.js to write it to the user's new markdown file.
module.exports = generateMarkdown;
