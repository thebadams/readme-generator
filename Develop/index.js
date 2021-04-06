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

const question2 = {
    type: "input",
    name: "authorName",
    message: "What is your name?"
}
const questions = [question1, question2];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(questions) {
    inquirer
        .prompt(questions).then((data)=>console.log(data));
}

// Function call to initialize app
init(questions);
