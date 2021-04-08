

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
function generateMarkdown(ReadMeInfo) {
  return `# ${ReadMeInfo.title}
## Description
${ReadMeInfo.description.description}
- ${ReadMeInfo.description.motivation} 
- ${ReadMeInfo.description.why}
- ${ReadMeInfo.description.solves}
- ${ReadMeInfo.description.learned}
## Table of Contents
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
## Installation
${ReadMeInfo.instructions.installation}
## Usage
${ReadMeInfo.instructions.usage}
## Credits
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.
## License
[![License: ${ReadMeInfo.license.short}](${ReadMeInfo.license.badgeURL})](${ReadMeInfo.license.linkURL})

${ReadMeInfo.license.content}
`;

}



export {generateMarkdown};
