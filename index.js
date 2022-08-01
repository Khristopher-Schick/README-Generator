// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    // QUESTION 1 NAME //
    {
        type: "input",
        name: "name",
        message: "Please enter your name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log("please enter your name")
                return false;
            }
        }

    },

     // QUESTION 2 TITLE //
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            }
            else {
                console.log("What is the name of your project?")
            }
        }
    },

     // QUESTION 3 DESCRIPTION //
    {
        type: "input",
        name: "Description",
        message: "Give a brief description of what your project is and how to use it",
        validate: descriptionInput => {}
    },

     // QUESTION 4 INSTALL INSTRUCTIONS //
    {
        type: "input",
        name: "Installtion",
        message: "Please provide readers how to install ypur projects",
        validate: installInput => {
            if (installInput) {
                return true;
            }
            else{
                console.log("explain steps on installtion")
                return false;
            }
        }
    },

    //  QUESTION 4 INTRUCTIONS //
    {
        type: "input",
        name: "instructions",
        message: "Provide a instructions on how to use the project"
    },

    // QUESTION 5 GITHUB //
    {
        type: "input",
        name: "github",
        message: "Please enter your presonal Github username",
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log("Enter Github username")
                return false;
            }
        }
    },

    //QUESTION 6 EMIAL // 
    {
        type: "input",
        name: "email",
        message: "Please provide your email address",
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log("Please enter your email address")
                return false;
            }
        }
    },

    //QUESTION 7 LICENSE//
    {
        type: "list",
        name: "license",
        message: "Please choose the license that suits you the best from the following list",
        choices: ['MIT License', 'Apache License 2.0', 'GPL 3.0']
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, error => {
        if (error) throw error;
        console.log("congratulations your REDME has been completed!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) => {
        const data =  generateMarkdown(userAnswers);
        writeToFile("readme", data);
    })
}

// Function call to initialize app
init();
