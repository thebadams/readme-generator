import inquirer from "inquirer"
import {AppURLs, Author, Description, Instructions, LicenseInfo} from "./classes.js"
import { prompt_appLicense } from "./prompt-questions.js"

const getAuthorInfo = async (authorPrompts)=>{
    const data = await inquirer.prompt(authorPrompts)
    return new Author(data.authorName, data.githubUserName, data.authorEmail)
}

const getAppInfo = async (appInfoPrompts)=>{
    const data = await inquirer.prompt(appInfoPrompts)
    return new Description(data.appTitle, data.appDescr, data.appMotivation, data.appWhy, data.appSolve, data.appLessons)
}

const getAppURLs = async (appURLPrompts)=>{
    const data = await inquirer.prompt(appURLPrompts);
    return new AppURLs(data.appDeployment, data.appRepo)
}

const getAppInstructions = async (appInstructionsPrompts)=>{
    const data = await inquirer.prompt(appInstructionsPrompts);
    return new Instructions(data.appInstallation, data.appUsage)
}

const chooseLicense = async (prompt_appLicense)=>{
    const data = await inquirer.prompt(prompt_appLicense)
    console.log(data)
    return new LicenseInfo(data.appLicense.name, data.appLicense.badgeURL, data.appLicense.linkURL, data.appLicense.content)
}
export {getAuthorInfo, getAppInfo, getAppURLs, getAppInstructions, chooseLicense}