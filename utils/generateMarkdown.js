// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {if (license === 'None') return '';
  return `\n[Learn more about the ${license} license](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {if (license === 'None') return '';
  return `## License

This project is licensed under the ${license} license.${renderLicenseLink(license)}
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions, contact me via GitHub or email:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
