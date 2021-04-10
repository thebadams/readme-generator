

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(readmeInfo) {
  return `![${readmeInfo.license.short}(${readmeInfo.license.badgeURL})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(readmeInfo) {
  return `![${readmeInfo.license.short}](${readmeInfo.license.URL})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(readmeInfo) {
  return `${readmeInfo.license.content}`
}

function renderDescription(readmeInfo){
  return `# ${readmeInfo.description.title}
    ## Description
    
    ${readmeInfo.description.description}
      - ${readmeInfo.description.motivation}
      - ${readmeInfo.description.why}
      - ${readmeInfo.description.solves}
      - ${readmeInfo.description.learned}`

}

function renderInstallationInstructions(readmeInfo){
  return `## Installation
    ${readmeInfo.instructions.installation}`
}

function renderUsageInstructions(readmeInfo){
  return `## Usage
    ${readmeInfo.instructions.usage}`
}

function renderContributionInstructions(readmeInfo){
  return `## Contribution
  
    Contact Me at [${readmeInfo.author.email}](mailto:${readmeInfo.author.email})
    
    View My Github at [https://www.github.com/${readmeInfo.author.gitHub}]
    
    Visit the Application's Repository [here](${readmeInfo.appURLs.repoURL})
    
    Visit the Application's Deployment [here](${readmeInfo.appURLs.deploymentURL})`

    
}
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
