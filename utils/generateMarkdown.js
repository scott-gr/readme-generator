// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
* [Description]
* [Intallation]
* [Usage]
* [License]
* [Contributors]
* [Test]
* [Questions]

## Description
${data.description}

#
`;
}

module.exports = generateMarkdown;
