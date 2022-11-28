// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown=require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is the title of your project",
        name: "title",
    },
    {
        type: "input",
        message: "what is the description of your project",
        name: "description",
    },
    {
        type: "input",
        message: "How is the Installation of your project",
        name: "Installation",
    },
    {
        type: "input",
        message: "what is the email on your project",
        name: "email",
    },
    {
        type: "input",
        message: "what is your github username ",
        name: "github username",
    },
    {
        type: "input",
        message: "what is your contribution on your project",
        name: "contribution",
    },
    {
        type: "input",
        message: "How you Test your project",
        name: "test",
    },
    
    {
        type: "input",
        message: "what is the usage of your project",
        name: "usage",
    },
    {
        type: "list",
        message: "choose a license",
        name: "license",
        choices: ["MIT","DNU","ISC"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(info){
        console.log(info)
        const generated=generateMarkdown(info)
        fs.writeFileSync("./dist/GENERATEDREADME.md", generated)

    })
}

// Function call to initialize app
init();
