const fs = require('fs');

fs.appendFileSync('notes.txt', 'This line was added by fs.appendFileSync in app.js');