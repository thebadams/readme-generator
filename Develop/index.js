// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import {generateMarkdown} from "./utils/generateMarkdown.js"
import {ReadmeInfo, Author, Instructions} from "./utils/classes.js"



// TODO: Create an array of questions for user input
//sections: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions

// Project Title: use an input
//Description: Use a 
//License: use a list or raw list> what's the difference

//build out questions:
//question 1: input determines name of application
const question1 = {
    type: "input",
    name: "appTitle",
    message: "What is the name of your Application?"
}

//question 2: input determines author's name
const question2 = {
    type: "input",
    name: "authorName",
    message: "What is your name?"
}
//question 3: input determines author's github username
const question3 = {
    type: "input",
    name: "githubUserName",
    message: "What is your GitHub username?"
}

//question 4: input determines authors' email address

const question4 = {
    type: "input",
    name: "authorEmail",
    message: "What is your e-mail address?"
}
const questions = [question1, question2, question3, question4];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
        .prompt(questions).then((data)=>console.log(data));
}

// Function call to initialize app
init(questions);
