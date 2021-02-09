const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
let internResponse = [];
let engineerResponse = [];
let managerResponse
function init() {
    const questions = [
        {
            type: 'input',
            message: 'What is the name of your teams manager',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your team managers email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your team managers employee ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your team managers office number?',
            name: 'officeNumber'
        },
    ];
    

    inquirer.prompt(questions)
    .then(response => {
        managerResponse = response; 
        menuQuestion()})
    .catch(err => {err ? console.log(err) : console.log('HTML Generated!!')});
}
function menuQuestion() {
    let questions = [
        {
        type: 'list',
            massage: 'Add an engineer, add an intern, or finish application.',
            choices: ['Engineer', 'Intern', 'Finish application'],
            name: 'addTeamMember'
        }
    ]
    inquirer.prompt(questions)
    .then(response => {
        if(response.addTeamMember === 'Engineer') {
            engineerQuestions();
        } else if(response.addTeamMember === 'Intern') {
            internQuestions();
        } else {
            console.log(managerResponse);
            console.log(engineerResponse);
            console.log(internResponse);
            generateMarkdown(managerResponse, engineerResponse, internResponse);
        }
    })
    .catch(err => {err ? console.log(err) : console.log('HTML Generated!!')});
}

function engineerQuestions() {
    let questions = [
        {
            type: 'input',
            message: 'What is the name of your engineer?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your engineers ID number?',
            name: 'id',          
        },
        {
            type: 'input',
            message: 'What is your engineers email?',
            name: 'email',           
        },
        {
            type: 'input',
            message: 'What is your engieers GitHub user name?',
            name: 'gitHubUser',            
        },
        {
            type: 'input',
            message: 'What is the link to your GitHub profile',
            name: 'gitHubLink'
        }
    ]
    inquirer.prompt(questions)
    .then(response => {
        engineerResponse.push(response);
        menuQuestion();
    })
    .catch(err => {err ? console.log(err) : console.log('HTML Generated!!')});
}

function internQuestions() {
    let questions = [
        {
            type: 'input',
            message: 'What is the name of your intern?',
            name: 'name',            
        },
        {
            type: 'input',
            message: 'What is your interns ID number?',
            name: 'id',          
        },
        {
            type: 'input',
            message: 'What is your interns email?',
            name: 'email',          
        },
        {
            type: 'input',
            message: 'What school does your intern attend?',
            name: 'school',        
        }
    ]
    inquirer.prompt(questions)
    .then(response => {
        internResponse.push(response);
        menuQuestion();
    })
    .catch(err => {err ? console.log(err) : console.log('HTML Generated!!')});
}

init();