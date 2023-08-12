import axios from "axios";

const express = require('express');

import { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
    res.render('index');
});

app.get('/generate', async (req: Request, res: Response) => {
    try {
        const result = await getActivity();
        const activity = result["activity"]; // Use a different variable name here
        res.json({ activity }); // Use the res.json() method to send the activity as JSON
    } catch (err) {
        res.json({ error: err }); // Send the error as JSON
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

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
module.exports = app;
