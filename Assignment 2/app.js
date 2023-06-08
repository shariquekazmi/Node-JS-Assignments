const express = require('express');

const app = express();

app.use('/users',(req, res, next) => {
    console.log('This is the 2nd middleware');
    res.send('<p>This middleware sends response for users tab and thus the assignment is solved </p>')
   
});

app.use('/',(req, res, next) => {
    console.log('This is the first middleware');
    res.send('<p>This middleware handles only /</p>')
    next();
});

app.listen(3000, () => {
    console.log('Listening at port 3000');
});

