// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# description
${data.description}
## Installation
${data.Installation}
## contribution
${data.contribution}
## test
${data.test}
## license
${data.license}
## usage
${data.usage}
## contact
${data.email}

`;
}

module.exports = generateMarkdown;
