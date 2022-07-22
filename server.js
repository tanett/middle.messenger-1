const express = require('express');
const path = require('path');
const Handlebars = require('handlebars')


const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));


app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
