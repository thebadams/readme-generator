//define classes and export

class ReadmeInfo {
    constructor(tTitle, tAuthor, tDescr, tLicense, tInstructions){
        this.title = tTitle,
        this.author = tAuthor,
        this.description = tDescr,
        this.license = tLicense,
        this.instructions = tInstructions
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

export {ReadmeInfo, Author, Instructions}