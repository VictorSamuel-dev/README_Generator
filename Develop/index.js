// TODO: Include packages needed for this application
const fs = required("fs");
const { default: inquirer } = require("inquirer");
const path = required("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./")
    });
}

// Function call to initialize app
init();
