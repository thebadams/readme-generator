import inquirer from "inquirer"
import {AppURLs, Author, Description} from "./classes.js"

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
export {getAuthorInfo, getAppInfo, getAppURLs}