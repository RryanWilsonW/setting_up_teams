const fs = require('fs');

function generateMarkdown(data) {
    fs.writeFile('index.html', `
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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </body>
    </html>
    `,
    (err) => {err ? console.log(err) : console.log('HTML Generated!!')});
}

module.exports = generateMarkdown;