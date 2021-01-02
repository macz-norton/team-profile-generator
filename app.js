// Require class files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Require dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Create specific paths for output file
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Require render file
const render = require("./lib/htmlRenderer");

// Empty array to store team data from information user provided
const teamData = [];

// Prompt user for manager information
function managerInfoPrompt() {

    return inquirer
        .prompt([
            {
                message: "What is your manager's full name?",
                name: "name",
                type: "input"
            },
            {
                message: "What is your manager's id?",
                name: "id",
                type: "input"
            },
            {
                message: "What is your manager's email?",
                name: "email",
                type: "input"
            },
            {
                message: "What is your manager's office phone number? e.g. (321) 867-5309",
                name: "officeNumber",
                type: "input"
            },
        ])
        .then((managerData) => {

            const newManager = new Manager (managerData.name, managerData.id, managerData.email, managerData.officeNumber);

            teamData.push(newManager);

            employeeTypePrompt();
        });
}

// Prompt user for employee type
function employeeTypePrompt() {

    return inquirer
    .prompt([
        {
            message: "Which type of team member would you like to add?",
            name: "employeeType",
            type: "list",
            choices: ["Engineer", "Intern", "I'm all done! I have no other team members to add."]
        }
    ])
    .then((newEmployee) => {

        if (newEmployee.employeeType === "Engineer") {

            engineerInfoPrompt();

        } else if (newEmployee.employeeType === "Intern") {

            internInfoPrompt();

        } else {
            
            renderHTML();
            
        }

    });
}

// Function to write data to the HTML file
function renderHTML() {

    const teamDataHTML = render(teamData);

    fs.writeFile(outputPath, teamDataHTML, (err) => {
        if (err) throw err;
        console.log("Team HTML file created successfully in `output` directory.")
    });
}

// Prompt user for engineer information
function engineerInfoPrompt() {

    return inquirer
    .prompt([
        {
            message: "What is the engineer's full name?",
            name: "name",
            type: "input"
        },
        {
            message: "What is the engineer's id?",
            name: "id",
            type: "input"
        },
        {
            message: "What is the engineer's email?",
            name: "email",
            type: "input"
        },
        {
            message: "What is the engineer's GitHub username?",
            name: "github",
            type: "input"
        },
    ])
    .then((engineerData) => {

        const newEngineer = new Engineer (engineerData.name, engineerData.id, engineerData.email, engineerData.github);

        teamData.push(newEngineer);

        employeeTypePrompt();
    });
}

// Prompt user for intern information
function internInfoPrompt() {

    return inquirer
    .prompt([
        {
            message: "What is the intern's full name?",
            name: "name",
            type: "input"
        },
        {
            message: "What is the intern's id?",
            name: "id",
            type: "input"
        },
        {
            message: "What is the intern's email?",
            name: "email",
            type: "input"
        },
        {
            message: "What is the intern's current school?",
            name: "school",
            type: "input"
        },
    ])
    .then((internData) => {

        const newIntern = new Intern (internData.name, internData.id, internData.email, internData.school);

        teamData.push(newIntern);

        employeeTypePrompt();
    });
 }

 // Start the initial inquirer prompt
 managerInfoPrompt();

// Other ideas: console log formatting, modularize inquirer