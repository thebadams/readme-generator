//define classes and export

class ReadmeInfo {
    constructor(tTitle, tAuthor, tDescr, tLicense, tInstructions, tAppInfo){
        this.title = tTitle,
        this.author = tAuthor,
        this.description = tDescr,
        this.license = tLicense,
        this.instructions = tInstructions,
        this.appInfo = tAppInfo
    }
}

class Author {
    constructor(tName, tGitHub, tEmail){
        this.name = tName,
        this.gitHub = tGitHub,
        this.email = tEmail
    }
}

class Instructions {
    constructor(tInstallation, tUsage){
        this.installation = tInstallation,
        this.usage = tUsage
    }
}

class Description {
    constructor(tDescription, tMotivation, tWhy, tSolves, tLearned){
        this.description = tDescription,
        this.motivation = tMotivation,
        this.why = tWhy,
        this.solves = tSolves,
        this.learned = tLearned 
    }
}

class AppInfo {
    constructor(tDeploymentURL, tRepoURL) {
        this.deploymentURL = tDeploymentURL,
        this.repoURL = tRepoURL
    }
}

class License {
    constructor(tName, tBadgeURL, tLinkURL, tContent, tValue = this){
        this.name = tName,
        this.badgeURL = tBadgeURL,
        this.linkURL = tLinkURL,
        this.content = tContent,
        this.value = tValue,
        this.short = tName
    }
}
export {ReadmeInfo, Author, Instructions, License, Description, AppInfo}