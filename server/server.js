const express = require('express');
const path = require('path');

const app = express();
const port = process.env.port || 3000;

app.use('/', express.static(path.join(__dirname + '/../' + '/public')));


console.log(port);

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});