const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));

    const response = {
        is_success: true,
        user_id: "your_fullname_ddmmyyyy",  // Replace with your details
        email: "your_college_email",        // Replace with your details
        roll_number: "your_roll_number",    // Replace with your details
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: alphabets.sort((a, b) => b.localeCompare(a)).slice(0, 1)
    };

    res.status(200).json(response);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = app;
