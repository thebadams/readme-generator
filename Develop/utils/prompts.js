import inquirer from "inquirer"
import {Author, Description} from "./classes.js"

const getAuthorInfo = async (authorPrompts)=>{
    const data = await inquirer.prompt(authorPrompts)
    return new Author(data.authorName, data.githubUserName, data.authorEmail)
}

const getAppInfo = async (appInfoPrompts)=>{
    const data = await inquirer.prompt(appInfoPrompts)
    return new Description(data.appTitle, data.appDescr, data.appMotivation, data.appWhy, data.appSolves, data.appLessons)
}

export {getAuthorInfo, getAppInfo}