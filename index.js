// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
     type: "input",
     name: "title",
     message: "What is the name if your project?",   
    },
    {
     type: "input",
     name: "description",
     message: "Could you please describe what your project is?",
    },
    {
     type: "checkbox",
     name: "license",
     message: "Please select a icense applicable to this project.",
     choices: ["MIT", "APACHE2.0", "bOOST1.0", "MPL2.0", "BSD2", "None"],
    },
    {
     type: "input",
     name: "inquire",
     message: "List list any project depensencies here",
    },
    {
     type: "input",
     name: "usage",
     message: "What language and technologies are used in this project",
    },
    {
     type: "input",
     name: "creator",
     message: "What is your GitHub username?",
    },
    {
     type: "input",
     name: "name",
     message: "What is your full name?",
    },
    {
     type: "input",
     name: "email",
     message: "Whta is a valid email address for you?",
    },
    {
     type: "input",
     name: "contributors",
     message: "Please list any contributor. (Use GitHut usernames)",
     default: "",
    },
    {
     type: "input",
     name: "test",
     message: "Provide walkthrough of required test if applicable.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Creating Professional README.md File...");
        writeToFile("./dist/README.md", generateMarkdown({ ...response }));
    });
}

// Function call to initialize app
init();
