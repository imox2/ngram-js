const express = require('express');
const bodyParser = require('body-parser')
const {detectLanguage} = require('./detect');
const app = express();
console.log("detectLanguage:",detectLanguage)
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/lang_id', (req, res) => {
    const text = req.body.text;
    const result = detectLanguage(text);
    // send only first macth
    const match = result[0];
    delete match['score'];
    res.json(match);
});

app.listen(3000, () => console.log('App listening on port 3000!'));