"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/generate', async (req, res) => {
    try{
        const result = await getActivity();
        res.json({ result });
    } catch (err) {
        res.json({ err });
    }
});

async function getActivity() {
    try {
        const response = await axios.get('https://www.boredapi.com/api/activity');
        return response.data;
    } catch (error) {
        console.error('Error fetching activity:', error);
        throw error;
    }
}

function generateRandomString() {
    const length = 10;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
module.exports = app;
