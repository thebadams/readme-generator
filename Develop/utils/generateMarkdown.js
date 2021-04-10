

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
async function renderLicenseBadge(readmeInfo) {
  return `![${readmeInfo.license.short}(${readmeInfo.license.badgeURL})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
async function renderLicenseLink(readmeInfo) {
  return `![${readmeInfo.license.short}](${readmeInfo.license.URL})`
}

async function renderLicenseContent(readmeInfo) {
  return `${readmeInfo.license.content}`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
async function renderLicenseSection(readmeInfo) {
  const badgeInfo = await renderLicenseBadge(readmeInfo)
  const licenseLink = await renderLicenseLink(readmeInfo);
  const licenseContent = await renderLicenseContent(readmeInfo)

  const licenseSection = `##License
    ${badgeInfo}
    
    ${licenseLink}
    
    ${licenseContent}
    
    ${licenseSection}`

    return licenseSection;
}

async function renderDescription(readmeInfo){
  return `# ${readmeInfo.description.title}
    ## Description
    
    ${readmeInfo.description.description}
      - ${readmeInfo.description.motivation}
      - ${readmeInfo.description.why}
      - ${readmeInfo.description.solves}
      - ${readmeInfo.description.learned}`

}

async function renderInstallationInstructions(readmeInfo){
  return `## Installation
    ${readmeInfo.instructions.installation}`
}

async function renderUsageInstructions(readmeInfo){
  return `## Usage
    ${readmeInfo.instructions.usage}`
}

async function renderContributionInstructions(readmeInfo){
  return `## Contribution
  
    Contact Me at [${readmeInfo.author.email}](mailto:${readmeInfo.author.email})
    
    View My Github at [https://www.github.com/${readmeInfo.author.gitHub}]
    
    Visit the Application's Repository [here](${readmeInfo.appURLs.repoURL})
    
    Visit the Application's Deployment [here](${readmeInfo.appURLs.deploymentURL})`

    
}

async function renderInstructionSection(readmeInfo){
  const installationInstructions = await renderInstallationInstructions(readmeInfo)
  const UsageInstructions = await renderUsageInstructions(readmeInfo)
  const contributionInstructions = await renderContributionInstructions(readmeInfo)

  const installationSection = `${
    installationInstructions}

    ${UsageInstructions}

    ${contributionInstructions}`

  return installationSection
  }
  
// TODO: Create a function to generate markdown for README)
async function generateMarkdown(readmeInfo) {
  const appDescription = await renderDescription(readmeInfo);
  const appInstructions = await renderInstructionSection(readmeInfo);
  const licenseSection = await renderLicenseSection(readmeInfo);

  return `${appDescription}
  
  ${appInstructions}
  
  ${licenseSection}`
}



export {generateMarkdown};
