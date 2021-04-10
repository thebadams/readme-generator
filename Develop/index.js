// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import {generateMarkdown} from "./utils/generateMarkdown.js"
import {ReadmeInfo, Author, Instructions, Description, AppURLs} from "./utils/classes.js"
import {licenses} from "./utils/licenses.js"
import {authorPrompts, appInfoPrompts, appURLPrompts, appInstructionsPrompts, prompt_appLicense} from "./utils/prompt-questions.js"
import {getAuthorInfo, getAppInfo, getAppURLs, getAppInstructions, chooseLicense} from "./utils/prompts.js"



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error)=>{
        error ? console.error(error) : console.log("Success")
    })
}

// TODO: Create a function to initialize app
async function init(authorPrompts, appInfoPrompts, appURLPrompts, appInstructionsPrompts, prompt_appLicense) {
    const authorInfo = await getAuthorInfo(authorPrompts);
    const appInfo = await getAppInfo(appInfoPrompts);
    const appURLs = await getAppURLs(appURLPrompts);
    const appInstructions = await getAppInstructions(appInstructionsPrompts)
    const appLicense = await chooseLicense(prompt_appLicense)
    console.log("Author Info:", authorInfo)
    console.log("appInfo:", appInfo)
    console.log("appURLs:", appURLs)
    console.log("App Instructions", appInstructions)
    console.log("License:", appLicense)
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
init(authorPrompts, appInfoPrompts, appURLPrompts, appInstructionsPrompts, prompt_appLicense);
// getAuthorInfo(authorPrompts);