const fs = require('fs');

// Problem: Read the data files ** in order **, creating one final string as a result

const finalDoc = [];

fs.readFile('data/p1.txt', 'utf8', (err, p1) => {
    if (err) {
        // stop 
        return console.log('YIKES. Failed to read p1: ', err);
    }
    finalDoc.push(p1);

    fs.readFile('data/p2.txt', 'utf8', (err, p2) => {
        if (err) {
            // stop 
            return console.log('YIKES. Failed to read p2: ', err);
        }
        finalDoc.push(p2);

        fs.readFile('data/p3.txt', 'utf8', (err, p3) => {
            if (err) {
                // stop 
                return console.log('YIKES. Failed to read p3: ', err);
            }
            finalDoc.push(p3);

            fs.readFile('data/p4.txt', 'utf8', (err, p4) => {
                if (err) {
                    // stop 
                    return console.log('YIKES. Failed to read p4: ', err);
                }
                finalDoc.push(p4);
                console.log(finalDoc.join('\n'));
            });
        });
    });
});
