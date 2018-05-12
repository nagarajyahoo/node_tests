const express = require('express');

const app = express();

app.get('/info', (req, res) => {
    res.status(200).send({
        name: "Nagaraj",
        age: 27
    });
});


app.listen(3000, () => {
    console.log('Started server...');
});

module.exports = {
  app : app
};