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
//questions 5-9: determine "Description" of app in readme
//question 5: input determines description of the application

const question5 = {
    type: "input",
    name: "appDescr",
    message: "Please give a brief description of the application"
}

const question6 = {
    type: "input",
    name: "appMotivation",
    message: "What was your motivation for developing this application?"
}

const question7 = {
    type: "input",
    name: "appWhy",
    message: "Why did you decide to build this application?"
}

const question8 = {
    type: "input",
    name: "appSolve",
    message: "What problem did this application aim to solve?"
}

const question9 = {
    type: "input",
    name: "appLessons",
    message: "What did you learn by developing this application?"
}



//app deployment and repo information

const question10 = {
    type: "input",
    name: "appRepo",
    message: "Please input the URL for the application's repository."
}
const questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
        .prompt(questions).then((data)=>console.log(data));
}

// Function call to initialize app
init(questions);
