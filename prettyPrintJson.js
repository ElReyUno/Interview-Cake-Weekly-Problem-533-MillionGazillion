const fs = require('fs');

const inputFilePath = 'test-results/test-results.json';
const outputFilePath = 'pretty-test-results.json';

fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        const jsonData = JSON.parse(data);
        const prettyJson = JSON.stringify(jsonData, null, 2);
        fs.writeFile(outputFilePath, prettyJson, 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Error writing file:', writeErr);
                return;
            }
            console.log(`Pretty-printed JSON saved to ${outputFilePath}`);
        });
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});