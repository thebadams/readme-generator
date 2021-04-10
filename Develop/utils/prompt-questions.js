import {licenses} from "./licenses.js" 

const prompt_authorName = {
    type: "input",
    name: "authorName",
    message: "What is your name?"
};

const prompt_githubUserName = {
    type: "input",
    name: "githubUserName",
    message: "What is your GitHub username?"
};

const prompt_authorEmail = {
    type: "input",
    name: "authorEmail",
    message: "What is your e-mail address?"
};

const authorPrompts = [prompt_authorName, prompt_githubUserName, prompt_authorEmail];

const prompt_appTitle = {
    type: "input",
    name: "appTitle",
    message: "What is the name of your Application?"
}

const prompt_appDescr = {
    type: "input",
    name: "appDescr",
    message: "Please give a brief description of the application"
}

const prompt_appMotivation = {
    type: "input",
    name: "appMotivation",
    message: "What was your motivation for developing this application?"
}

const prompt_appWhy = {
    type: "input",
    name: "appWhy",
    message: "Why did you decide to build this application?"
}

const prompt_appSolve = {
    type: "input",
    name: "appSolve",
    message: "What problem did this application aim to solve?"
}

const prompt_appLessons = {
    type: "input",
    name: "appLessons",
    message: "What did you learn by developing this application?"
}

const appInfoPrompts = [prompt_appTitle, prompt_appDescr, prompt_appMotivation, prompt_appWhy, prompt_appSolve, prompt_appLessons]

const prompt_appRepoURL = {
    type: "input",
    name: "appRepo",
    message: "Please input the URL for the application's repository."
}

const prompt_appDeploymentURL = {
    type: "input",
    name: "appDeployment",
    message: "Please input the URL where the application has been deployed."
}

const appURLPrompts = [prompt_appRepoURL, prompt_appDeploymentURL]

const prompt_appInstallation = {
    type: "editor",
    name: "appInstallation",
    message: "Please use the text editor to input the steps that should be taken for installation."
}

const prompt_appUsage = {
    type: "editor",
    name: "appUsage",
    message: "Please use the text editor to explain the steps that should be taken to use the application."
}

const appInstructionsPrompts = [prompt_appInstallation, prompt_appUsage]

const prompt_appLicense = {
    type: "list",
    name: "appLicense",
    choices: licenses,
    default: 0,
    message: "Please choose a license from these choices." 
}
export {authorPrompts, appInfoPrompts, appURLPrompts, appInstructionsPrompts, prompt_appLicense}