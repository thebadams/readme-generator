import inquirer from "inquirer";
import {Author} from "./classes.js"

const getAuthorInfo = async (authorPrompts)=>{
    const data = await inquirer.prompt(authorPrompts)
    return new Author(data.authorName, data.githubUserName, data.authorEmail)
}

export {getAuthorInfo}