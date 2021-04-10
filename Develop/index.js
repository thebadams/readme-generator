// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import {generateMarkdown} from "./utils/generateMarkdown.js"
import {ReadmeInfo, Author, Instructions, Description, AppURLs} from "./utils/classes.js"
import {licenses} from "./utils/licenses.js"
import {authorPrompts, appInfoPrompts} from "./utils/prompt-questions.js"
import {getAuthorInfo, getAppInfo} from "./utils/prompts.js"



// TODO: Create an array of questions for user input
//sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions

// Project Title: use an input
//Description: Use a 
//License: use a list or raw list> what's the difference

//build out questions:
//question 1: input determines name of application



//question 3: input determines author's github username


//question 4: input determines authors' email address


//questions 5-9: determine "Description" of app in readme
//question 5: input determines description of the application











//app deployment and repo information

const question10 = {
    type: "input",
    name: "appRepo",
    message: "Please input the URL for the application's repository."
}

const question11 = {
    type: "input",
    name: "appDeployment",
    message: "Please input the URL where the application has been deployed."
}

//create license information choices
//TODO: build out license objects
const question12 = {
    type: "list",
    name: "appLicense",
    choices: licenses,
    default: 0,
    message: "Please choose a license from these choices." 
}

const question13 = {
    type: "editor",
    name: "appInstallation",
    message: "Please use the text editor to input the steps that should be taken for installation."
}

const question14 = {
    type: "editor",
    name: "appUsage",
    message: "Please use the text editor to explain the steps that should be taken to use the application."
}

// const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error)=>{
        error ? console.error(error) : console.log("Success")
    })
}

// TODO: Create a function to initialize app
async function init(authorPrompts, appInfoPrompts) {
    const authorInfo = await getAuthorInfo(authorPrompts);
    const appInfo = await getAppInfo(appInfoPrompts);
    // inquirer
    //     .prompt(questions)
    //         .then((data)=>{  
    //             console.log(data.license)             
    //             let author = new Author(data.authorName, data.githubUserName, data.authorEmail);
    //             let instructions = new Instructions(data.appInstallation, data.appUsage);
    //             let description = new Description(data.appDescr, data.appMotivation, data.appWhy, data.appSolve, data.appLessons);
    //             let appInfo = new AppInfo(data.appDeployment, data.appRepo);
    //             let readmeInfo = new ReadmeInfo(data.appTitle, author, description, data.appLicense, instructions, appInfo)
    //             return readmeInfo
    //         })
    //         .then((readmeInfo)=>{
    //            let markdown =  generateMarkdown(readmeInfo);
    //            return markdown;
    //         })
    //         .then((markdown)=>{
    //             writeToFile("testREADME.md", markdown)

    //         })
}

// Function call to initialize app
init(authorPrompts, appInfoPrompts);
// getAuthorInfo(authorPrompts);