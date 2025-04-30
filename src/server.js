const express = require('express')
const path = require('path');

const app = express();

//allows frontend to load a file
app.get('/', (req, res) => {
    res.sendFile(path.join (__dirname, `index.html`));
});
//create endpoint that frontend code will be able to load data from and send back data
//sending back user data
app.get('/api/users', (req, res) => {
    //will return an array of javascript objects
    const users =  [{
        id: '123',
        name: 'shaun',
    }, {
        id: '234',
        name: 'John',
    }, {
        id: '235',
        name: 'Sue',
    }];
    res.json(users);
});
app.listen(8080, () => {
    console.log('Server started on port 8080');
});