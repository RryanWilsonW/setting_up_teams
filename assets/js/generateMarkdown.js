const fs = require('fs');

function generateMarkdown(managerData, engineerData, internData) {
    console.log(managerData);
    console.log(engineerData);
    console.log(internData);
    
    let managerCard = getManagerCard(managerData);
    let engineerCards = getEngineerCards(engineerData);
    let internCards = getInternCards(internData);

    let htmlText = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href='../style/style.css'>
    </head>
    <body>
        <h1>My Team</h1>
        <ul> 
        ${managerCard}
        ${engineerCards}
        ${internCards}
        </ul> 
    </body>
    </html>`

    fs.writeFile('index.html', htmlText,
    (err) => {err ? console.log(err) : console.log('HTML Generated!!')});
}

function getManagerCard(managerData) {
    let card =
    `    <li>
                <div>
                    <h1>${managerData.name}</h1>
                    <h2>Manager</h2>
                </div>
                <div>
                    <p>ID: ${managerData.id}</p>
                    <p>Email: ${managerData.email}</p>
                    <p>Office number: ${managerData.officeNumber}</p>
                </div>
            </li>`;
    return card;
}

function getEngineerCards(engineerData) {
    let cards = '';

    engineerData.forEach(engineer => {
        cards +=
        `    <li>
                <div>
                    <h1>${engineer.name}</h1>
                    <h2>Engineer</h2>
                </div>
                <div>
                    <p>ID: ${engineer.id}</p>
                    <p>Email: ${engineer.email}</p>
                    <p>GitHub: ${engineer.gitHubUser}</p>
                </div>
            </li>
        `;
    });

    return cards;
}

function getInternCards(internData) {
    let cards = '';
    internData.forEach(intern => {
        cards +=
        `    <li>
                <div>
                    <h1>${intern.name}</h1>
                    <h2>Intern</h2>
                </div>
                <div>
                    <p>ID: ${intern.id}</p>
                    <p>Email: ${intern.email}</p>
                    <p>GitHub: ${intern.school}</p>
                </div>
            </li>
        `;
    });
    return cards;
}

module.exports = generateMarkdown;
